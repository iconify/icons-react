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

.kydb6wb_b {
  d: path("M8 13.5v-5c-.25-3-2.25-5-5.25-5c0 3 2.25 5 5.25 5C8.25 5.25 10.25 3 13.25 3c0 3-2 5.5-5.25 5.5m10 6.25v3.5M18 21h.01");
}

.lmwdq6bhb {
  d: path("M5.518 13.5h4.964a1.75 1.75 0 0 1 1.733 1.997l-.5 3.5A1.75 1.75 0 0 1 9.982 20.5H6.018a1.75 1.75 0 0 1-1.733-1.503l-.5-3.5A1.75 1.75 0 0 1 5.518 13.5");
}
</style><g class="hntgybcog"><path class="lmwdq6bhb"/><path class="kydb6wb_b"/></g>`,
		"fallback": "uix:plant-alert",
	});
}

export default Component;
