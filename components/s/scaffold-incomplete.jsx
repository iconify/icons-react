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
		"content": `<style>.z1mg7bbyz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21.5v-19m8 19v-19m8 0V11M4 4h16M4 11h16M4 18h8m6-3.25v3.5M18 21h.01");
}
</style><path class="z1mg7bbyz"/>`,
		"fallback": "uix:scaffold-incomplete",
	});
}

export default Component;
