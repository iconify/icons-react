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

.q2_2b-1nb {
  d: path("M5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0m7-9.5V5m0 14v2.5M2.5 12H5m14 0h2.5");
}

.rq_kn7bnn {
  d: path("M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="q2_2b-1nb"/><path class="rq_kn7bnn"/></g>`,
		"fallback": "uix:locate",
	});
}

export default Component;
