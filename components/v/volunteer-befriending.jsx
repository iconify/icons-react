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
		"content": `<style>.v_9fjebmt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m-1.75 13c0-4 2.5-6 5.5-6s5.5 2 5.5 6m.75-11a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m1 6.25c2.5-1.5 6.25-.25 6.25 3.75");
}
</style><path class="v_9fjebmt"/>`,
		"fallback": "uix:volunteer-befriending",
	});
}

export default Component;
