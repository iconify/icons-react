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
		"content": `<style>.k07c15b1d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.375 7h5.25A4.375 4.375 0 0 1 19 11.375v5.75a4.375 4.375 0 0 1-4.375 4.375h-5.25A4.375 4.375 0 0 1 5 17.125v-5.75A4.375 4.375 0 0 1 9.375 7M9 2.5V7m6-4.5V7m-6.5 7h.01M12 14h.01m3.49 0h.01");
}
</style><path class="k07c15b1d"/>`,
		"fallback": "uix:socket-tester",
	});
}

export default Component;
