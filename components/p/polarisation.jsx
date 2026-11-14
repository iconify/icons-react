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
		"content": `<style>.m44wysm1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12q1.5-5 3 0t2.75 0M11 3v18m3-18v18m4.75-15.5v13m-2-11l2-2l2 2m-4 9l2 2l2-2");
}
</style><path class="m44wysm1b"/>`,
		"fallback": "uix:polarisation",
	});
}

export default Component;
