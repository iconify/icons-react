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
		"content": `<style>.kp04-ibrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5c0-3.25 2.25-5.25 4.75-5.25s4.5 2 4.5 5.25ZM17.625 11h1.25a2.625 2.625 0 0 1 2.625 2.625v4.25a2.625 2.625 0 0 1-2.625 2.625h-1.25A2.625 2.625 0 0 1 15 17.875v-4.25A2.625 2.625 0 0 1 17.625 11M4.25 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M15 14.25h6.5M15 17.5h6.5");
}
</style><path class="kp04-ibrb"/>`,
		"fallback": "uix:investor",
	});
}

export default Component;
