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
		"content": `<style>.b1giyo3pl {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zyfgcgbkb {
  d: path("M17.125 5.5zA1.375 1.375 0 0 1 18.5 6.875v10.25a1.375 1.375 0 0 1-1.375 1.375a1.375 1.375 0 0 1-1.375-1.375V6.875A1.375 1.375 0 0 1 17.125 5.5M6.25 6.75h.01m3.24 0h.01m3.24 0h.01M6.25 12h.01m3.24 0h.01m3.24 0h.01m-6.51 5.25h.01m3.24 0h.01m3.24 0h.01");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="zyfgcgbkb"/></g>`,
		"fallback": "uix:pos-keypad",
	});
}

export default Component;
