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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ld-xwhbyo {
  d: path("M9.5 18c0-5 3-7.5 5-7.5c0 5-2.5 7.5-5 7.5");
}

.slkpq1bkc {
  d: path("M8.75 2.5h6.5A1.75 1.75 0 0 1 17 4.25A1.75 1.75 0 0 1 15.25 6h-6.5A1.75 1.75 0 0 1 7 4.25A1.75 1.75 0 0 1 8.75 2.5M8 6L5 9v10a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V9l-3-3");
}
</style><g class="hntgybcog"><path class="slkpq1bkc"/><path class="ld-xwhbyo"/></g>`,
		"fallback": "uix:specimen-preserved",
	});
}

export default Component;
