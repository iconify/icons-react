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
		"content": `<style>.vo1yiebru {
  d: path("M6 7h15.25v10H6A3.25 5 0 0 1 6 7Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zlbxh0rej {
  d: path("M6 7a3.25 5 0 0 1 0 10A3.25 5 0 0 1 6 7Zm0 3.5a.9 1.5 0 0 0 0 3a.9 1.5 0 0 0 0-3Zm5.5-.25h5m-3 3.5h5");
}
</style><g class="x2cwu0gfd"><path class="vo1yiebru"/><path class="zlbxh0rej"/></g>`,
		"fallback": "iconoven:log-sharp",
	});
}

export default Component;
