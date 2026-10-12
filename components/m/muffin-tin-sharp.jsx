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
		"content": `<style>.d9551fyht {
  d: path("M8.5 6.5a2 2 0 1 1 0 4a2 2 0 1 1 0-4Zm7 0a2 2 0 1 1 0 4a2 2 0 1 1 0-4Zm-7 7a2 2 0 1 1 0 4a2 2 0 1 1 0-4Zm7 0a2 2 0 1 1 0 4a2 2 0 1 1 0-4Z");
}

.nciaxcb6w {
  d: path("M3.25 3.25h17.5v17.5H3.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nciaxcb6w"/><path class="d9551fyht"/></g>`,
		"fallback": "iconoven:muffin-tin-sharp",
	});
}

export default Component;
