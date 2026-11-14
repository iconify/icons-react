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
		"content": `<style>.qlp5f_b0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.104 10.977l2-1.734a1.75 1.75 0 0 1 2.292 0l2 1.734A1.75 1.75 0 0 1 10 12.299v6.951A1.75 1.75 0 0 1 8.25 21h-4a1.75 1.75 0 0 1-1.75-1.75v-6.951a1.75 1.75 0 0 1 .604-1.322m11.5-5.5l2-1.734a1.75 1.75 0 0 1 2.292 0l2 1.734a1.75 1.75 0 0 1 .604 1.322V19.25A1.75 1.75 0 0 1 19.75 21h-4A1.75 1.75 0 0 1 14 19.25V6.799a1.75 1.75 0 0 1 .604-1.322M6.25 12h.01m11.49-5.5h.01M4.75 19l3-4m-3 .25h.01m2.99 3.5h.01M16 14.5l3.5-4.5m-3.5.25h.01m3.49 4h.01");
}
</style><path class="qlp5f_b0s"/>`,
		"fallback": "uix:mortgage-rate-compare",
	});
}

export default Component;
