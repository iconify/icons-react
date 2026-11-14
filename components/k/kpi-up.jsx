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

.q6zjgccit {
  d: path("M6.875 4.5h10.25A4.375 4.375 0 0 1 21.5 8.875v6.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 15.125v-6.25A4.375 4.375 0 0 1 6.875 4.5M6 9h4m-4 5.5h4m5.5 1v-7");
}

.xhvwhd-up {
  d: path("m13 11l2.5-2.5L18 11");
}
</style><g class="hntgybcog"><path class="q6zjgccit"/><path class="xhvwhd-up"/></g>`,
		"fallback": "uix:kpi-up",
	});
}

export default Component;
