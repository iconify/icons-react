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
		"content": `<style>.dtl23o_xq {
  cx: 12px;
  cy: 6px;
  r: 4px;
}

.eze7bbbbn {
  stroke-linejoin: round;
  d: path("M16.666 16L19.3327 16");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lt36robqc {
  d: path("M15.02 13.3317C14.0882 13.1178 13.0685 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C17.5794 22 19.2676 21.02 19.7784 19.5839");
}

.r0p-ejt9x {
  d: path("M22 16C22 18.2091 20.2091 20 18 20C15.7909 20 14 18.2091 14 16C14 13.7909 15.7909 12 18 12C20.2091 12 22 13.7909 22 16Z");
}

.xk0kdnbak {
  stroke-linejoin: round;
  d: path("M18 14.6666V17.3333");
}
</style><g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="xk0kdnbak"/><path class="eze7bbbbn"/><path class="r0p-ejt9x"/><path class="lt36robqc"/></g>`,
		"fallback": "solar:user-plus-linear",
	});
}

export default Component;
