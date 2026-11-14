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
		"content": `<style>.g_n-_v1ij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10a3.5 3.5 0 0 1 3.5 3.5v11A3.5 3.5 0 0 1 17 21H7a3.5 3.5 0 0 1-3.5-3.5v-11A3.5 3.5 0 0 1 7 3m5 0v18M3.5 10H12m0 4h8.5M9 6.5h.01m5.99 11h.01");
}
</style><path class="g_n-_v1ij"/>`,
		"fallback": "uix:pin-parcel-locker",
	});
}

export default Component;
