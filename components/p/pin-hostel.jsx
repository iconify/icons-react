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
		"content": `<style>.moeyeg16a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5v17m16-17v17M4 10h16M4 17h16M8.25 6.5h1.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 9.75 10h-1.5A1.75 1.75 0 0 1 6.5 8.25A1.75 1.75 0 0 1 8.25 6.5m0 7h1.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 9.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="moeyeg16a"/>`,
		"fallback": "uix:pin-hostel",
	});
}

export default Component;
