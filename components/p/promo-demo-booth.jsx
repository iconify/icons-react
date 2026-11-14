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
		"content": `<style>.kd-kphbhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0m-12.25 5h6.5A1.75 1.75 0 0 1 17 13.25v2A1.75 1.75 0 0 1 15.25 17h-6.5A1.75 1.75 0 0 1 7 15.25v-2a1.75 1.75 0 0 1 1.75-1.75M3.5 17h17v4h-17Z");
}
</style><path class="kd-kphbhn"/>`,
		"fallback": "uix:promo-demo-booth",
	});
}

export default Component;
