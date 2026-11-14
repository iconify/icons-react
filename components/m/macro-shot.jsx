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

.yf2y4cb8h {
  d: path("M13.75 9.5a2.5 2.5 0 1 1 1 3.5A2.5 2.5 0 1 1 12 15a2.5 2.5 0 1 1-2.75-2a2.5 2.5 0 1 1 1-3.5a2.5 2.5 0 1 1 3.5 0");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="yf2y4cb8h"/></g>`,
		"fallback": "uix:macro-shot",
	});
}

export default Component;
