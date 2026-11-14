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
		"content": `<style>.x90lwowkc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 16.5h1A1.75 1.75 0 0 1 7 18.25v1.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-1.5a1.75 1.75 0 0 1 1.75-1.75m7.25-4h1a1.75 1.75 0 0 1 1.75 1.75v5.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-5.5a1.75 1.75 0 0 1 1.75-1.75m7.25-4h1a1.75 1.75 0 0 1 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 17 19.75v-9.5a1.75 1.75 0 0 1 1.75-1.75M2.5 19H7m2.75-3.5h4.5m-4.5 3h4.5m2.75-7h4.5M17 14.75h4.5M17 18h4.5M3 13.5l11-10m-3.5 0H14V7");
}
</style><path class="x90lwowkc"/>`,
		"fallback": "uix:pay-raise",
	});
}

export default Component;
