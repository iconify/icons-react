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

.k_ji0cbtm {
  d: path("M4.5 4h13a2 2 0 0 1 2 2v5.5H14l-3 5v.5H4.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2");
}

.krty8ebwd {
  d: path("m6 7.5l5 3.5l5-3.5m2.825 7.494l1.754 3.302a1.5 1.5 0 0 1-1.324 2.204h-3.51a1.5 1.5 0 0 1-1.324-2.204l1.754-3.302a1.5 1.5 0 0 1 2.65 0M17.5 15.5v2m0 1.75h.01");
}
</style><g class="hntgybcog"><path class="k_ji0cbtm"/><path class="krty8ebwd"/></g>`,
		"fallback": "uix:warning-letter",
	});
}

export default Component;
