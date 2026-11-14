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
		"content": `<style>.qbs1anbxt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.119 2.5h11.762A1.75 1.75 0 0 1 19.6 4.58l-1.827 9.5a1.75 1.75 0 0 1-1.719 1.42H7.946a1.75 1.75 0 0 1-1.719-1.42L4.4 4.58A1.75 1.75 0 0 1 6.119 2.5m-1.369 4h14.5M8.5 18.5v3m3.5-3v3m3.5-3v3");
}
</style><path class="qbs1anbxt"/>`,
		"fallback": "uix:repotting-drainage",
	});
}

export default Component;
