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
		"content": `<style>.pf1xmh5bz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h1a3.5 3.5 0 0 1 3.5 3.5v11A3.5 3.5 0 0 1 7 21H6a3.5 3.5 0 0 1-3.5-3.5v-11A3.5 3.5 0 0 1 6 3m9.25 0h4.5a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 19.75 7h-4.5a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 15.25 3m0 7h4.5a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 19.75 14h-4.5a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 15.25 10m0 7h4.5a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 19.75 21h-4.5a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 15.25 17M5.5 7h2");
}
</style><path class="pf1xmh5bz"/>`,
		"fallback": "uix:pets-vs-cattle",
	});
}

export default Component;
