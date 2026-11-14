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
		"content": `<style>.es76f8yuu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 4.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M4 21v-9a4 4 0 0 1 8 0v9m3.75-10.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M15 21v-4.75a2.5 2.5 0 0 1 5 0V21");
}
</style><path class="es76f8yuu"/>`,
		"fallback": "uix:parent-child",
	});
}

export default Component;
