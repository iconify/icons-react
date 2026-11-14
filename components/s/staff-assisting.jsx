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
		"content": `<style>.d8874ub0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 8a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M2.5 21c0-4 2.5-6 6-6s6 2 6 6m1-17h5a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1H17l-2.5 2V5a1 1 0 0 1 1-1");
}
</style><path class="d8874ub0e"/>`,
		"fallback": "uix:staff-assisting",
	});
}

export default Component;
