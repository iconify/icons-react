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
		"content": `<style>.kdky3db3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 3h3.5A5.25 5.25 0 0 1 19 8.25v4.5A5.25 5.25 0 0 1 13.75 18h-3.5A5.25 5.25 0 0 1 5 12.75v-4.5A5.25 5.25 0 0 1 10.25 3M5 10h14M8.5 14h.01m6.99 0h.01M8 18l-2 3.5M16 18l2 3.5");
}
</style><path class="kdky3db3m"/>`,
		"fallback": "uix:pin-metro",
	});
}

export default Component;
