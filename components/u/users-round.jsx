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
		"content": `<style>.mmn_dvpka {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M3 20.5c0-3.5 2.75-5.75 6.5-5.75S16 17 16 20.5M15 4.25a3.5 3.5 0 0 1 0 7m2.5 3.5c2 .5 3.5 2.25 3.5 5.75");
}
</style><path class="mmn_dvpka"/>`,
		"fallback": "uix:users-round",
	});
}

export default Component;
