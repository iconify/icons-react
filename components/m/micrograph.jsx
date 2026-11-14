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

.syz6z9bej {
  d: path("M5.5 11c0-2.75 2.5-4 5-3.5c3 .5 4 3 3.25 5.25s-3.25 3-5.25 2.5s-3-2.25-3-4.25m4.25.25h.01M15 16.5h3.75");
}

.yssyf8lqd {
  d: path("M6.875 4.5h10.25A4.375 4.375 0 0 1 21.5 8.875v6.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 15.125v-6.25A4.375 4.375 0 0 1 6.875 4.5");
}
</style><g class="hntgybcog"><path class="yssyf8lqd"/><path class="syz6z9bej"/></g>`,
		"fallback": "uix:micrograph",
	});
}

export default Component;
