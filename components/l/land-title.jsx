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

.v_qh45bgy {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M8.512 14.552l2.5-2.188a1.5 1.5 0 0 1 1.976 0l2.5 2.188A1.5 1.5 0 0 1 16 15.681V17a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 17v-1.319a1.5 1.5 0 0 1 .512-1.129");
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="v_qh45bgy"/></g>`,
		"fallback": "uix:land-title",
	});
}

export default Component;
