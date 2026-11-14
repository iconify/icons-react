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
		"content": `<style>.svr3sab3e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13a8.5 8.5 0 0 1 17 0M11 13l3.5-4.25M11 13h.01m4.24 4v3M18 15.5v6m2.75-4.5v3");
}
</style><path class="svr3sab3e"/>`,
		"fallback": "uix:measure-sound",
	});
}

export default Component;
