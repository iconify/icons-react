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
		"content": `<style>.e2tih6upc {
  d: path("M13.689 19.5H2.5V10L16 3.5l4.5 6.5v2.111M2.5 10h18");
}

.e4oxt4c_w {
  d: path("M6 14.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6.75-1.25h.01M19 22l-2.25-2.75a2.75 2.75 0 1 1 4.5 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e2tih6upc"/><path class="e4oxt4c_w"/></g>`,
		"fallback": "uix:pin-cheese",
	});
}

export default Component;
