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
		"content": `<style>.ztw360_ou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 8.5h1A1.75 1.75 0 0 1 7 10.25v3.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 4.25 8.5m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 11.5 8.5m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 17 13.75v-3.5a1.75 1.75 0 0 1 1.75-1.75M7 12h2.75m4.5 0H17");
}
</style><path class="ztw360_ou"/>`,
		"fallback": "uix:prompt-chain",
	});
}

export default Component;
