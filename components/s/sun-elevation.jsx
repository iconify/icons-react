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
		"content": `<style>.nml63dbfl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5h19M15 6.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-11 13L7.75 16m2-2l3.75-3.25M4 14.5a5 5 0 0 1 3.41 1.343");
}
</style><path class="nml63dbfl"/>`,
		"fallback": "uix:sun-elevation",
	});
}

export default Component;
