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
		"content": `<style>.bdu0mbk-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 2.5h3m-1.5 0v2m-.75 0h1.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 12.75 9h-1.5A1.75 1.75 0 0 1 9.5 7.25v-1a1.75 1.75 0 0 1 1.75-1.75M5 9h14a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 19 12H5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 5 9m.5 3L7 15.75L8.5 12m2 0l1.5 3.75L13.5 12m2 0l1.5 3.75L18.5 12M3 18.5v3h18v-3");
}
</style><path class="bdu0mbk-v"/>`,
		"fallback": "uix:multichannel-pipette",
	});
}

export default Component;
