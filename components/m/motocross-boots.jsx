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
		"content": `<style>.lvn-2jbze {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h10l-1 4v5.5l5 2a2.5 2.5 0 0 1 2 2.5v1H5.5l1-11Zm.5 15v3H21v-3M6.25 10.5H14");
}
</style><path class="lvn-2jbze"/>`,
		"fallback": "uix:motocross-boots",
	});
}

export default Component;
