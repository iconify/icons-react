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
		"content": `<style>.hn01ov6oy {
  d: path("M9.5 2.5h5C17 6 18.5 10 18 15H6c-.5-5 1-9 3.5-12.5ZM6 15l-.5 6.5h13L18 15");
}

.qk8w7u2wb {
  d: path("M8.75 10a2 2.5 0 1 0 4 0a2 2.5 0 1 0-4 0ZM14 6h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hn01ov6oy"/><path class="qk8w7u2wb"/></g>`,
		"fallback": "uix-sharp:lava-lamp-convection",
	});
}

export default Component;
