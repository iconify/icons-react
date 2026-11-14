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
		"content": `<style>.fbe8x9bxq {
  d: path("m6.183 6.658l4.146-2.073a1.5 1.5 0 0 1 1.342 0l4.146 2.073a1.5 1.5 0 0 1 0 2.684l-4.146 2.073a1.5 1.5 0 0 1-1.342 0L6.183 9.342a1.5 1.5 0 0 1 0-2.684");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.si_bombbc {
  d: path("m10.75 17.75l1.75 1.75l-1.75 1.75");
}

.v3jddtbjm {
  d: path("M6.5 10v3.5c0 1.75 9 1.75 9 0V10m3-2v4M15 18.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m2.75-.75v1.5M3.5 15.25c0 3 4 4.5 9 4.25");
}
</style><g class="hntgybcog"><path class="fbe8x9bxq"/><path class="v3jddtbjm"/><path class="si_bombbc"/></g>`,
		"fallback": "uix:tuition-reimbursement",
	});
}

export default Component;
