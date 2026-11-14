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

.rf2l-o1gd {
  fill: currentColor;
  d: path("M9 14.5h.5A1.5 1.5 0 0 1 11 16v.5A1.5 1.5 0 0 1 9.5 18H9a1.5 1.5 0 0 1-1.5-1.5V16A1.5 1.5 0 0 1 9 14.5m5.5-2.25h.5a1.5 1.5 0 0 1 1.5 1.5v2.75A1.5 1.5 0 0 1 15 18h-.5a1.5 1.5 0 0 1-1.5-1.5v-2.75a1.5 1.5 0 0 1 1.5-1.5");
}

.xv_y5yg6a {
  d: path("M7 5h10a3.5 3.5 0 0 1 3.5 3.5V17a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V8.5A3.5 3.5 0 0 1 7 5m1-2v4m8-4v4M3.5 10h17");
}
</style><g class="hntgybcog"><path class="xv_y5yg6a"/><path class="rf2l-o1gd"/></g>`,
		"fallback": "uix:month-over-month",
	});
}

export default Component;
