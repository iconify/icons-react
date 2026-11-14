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
		"content": `<style>.rszirdb7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h16.75M3.5 4v14A2.5 2.5 0 0 0 6 20.5h5a2.5 2.5 0 0 0 2.5-2.5V4m4.25 0c0 4.5-1.5 7.75-1.5 10.5a2.25 2.25 0 0 0 4.5 0c0-2.75-1.5-6-1.5-10.5");
}
</style><path class="rszirdb7s"/>`,
		"fallback": "uix:viscosity",
	});
}

export default Component;
