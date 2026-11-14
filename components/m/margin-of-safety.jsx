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
		"content": `<style>.lqxbo2b4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19.5h18M3 5h18M6.5 19.5V15m5.5 4.5v-7.25m5.5 7.25v-10");
}
</style><path class="lqxbo2b4d"/>`,
		"fallback": "uix:margin-of-safety",
	});
}

export default Component;
