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

.qrts5lpia {
  d: path("M6 13.5q3-3 6 0t6 0");
}

.vp51uruav {
  d: path("M6.875 7h10.25a4.375 4.375 0 0 1 4.375 4.375v4.25A4.375 4.375 0 0 1 17.125 20H6.875A4.375 4.375 0 0 1 2.5 15.625v-4.25A4.375 4.375 0 0 1 6.875 7M8.5 7V5A1.5 1.5 0 0 1 10 3.5h4A1.5 1.5 0 0 1 15.5 5v2");
}
</style><g class="hntgybcog"><path class="vp51uruav"/><path class="qrts5lpia"/></g>`,
		"fallback": "uix:sensory-kit",
	});
}

export default Component;
