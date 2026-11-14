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
		"content": `<style>.l5s650bld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 17.5v-11m0 0h3a3 3 0 0 1 0 6h-3m8.5 5v-11l4.25 6l4.25-6v11");
}
</style><path class="l5s650bld"/>`,
		"fallback": "uix:time-pm",
	});
}

export default Component;
