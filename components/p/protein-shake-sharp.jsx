import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oyvv7db7w {
  d: path("M5.5 8a6.5 3.25 0 0 1 13 0Zm8.25-3.15L15 3m-6.75 8h9.25l-.17 1.74l-.66 6.77l-.17 1.74h-9l-.17-1.74l-.66-6.77L6.5 11z");
}

.rqfaqacav {
  cx: 12px;
  cy: 16.125px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="oyvv7db7w"/><circle class="rqfaqacav"/></g>`,
		"fallback": "iconoven:protein-shake-sharp",
	});
}

export default Component;
