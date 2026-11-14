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

.q45tak3zi {
  d: path("M7.875 2.5h8.25A4.375 4.375 0 0 1 20.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-8.25A4.375 4.375 0 0 1 3.5 17.125V6.875A4.375 4.375 0 0 1 7.875 2.5");
}

.v-jm77swm {
  d: path("M8 10a4 4 0 0 1 8 0m-4 0l2.25-2.25M8.5 14.5h.01m3.49 0h.01m3.49 0h.01M8.5 18h.01M12 18h.01m3.49 0h.01");
}
</style><g class="hntgybcog"><path class="q45tak3zi"/><path class="v-jm77swm"/></g>`,
		"fallback": "uix:meter-keypad",
	});
}

export default Component;
