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
		"content": `<style>.tfg07bb9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10.5h17a8.5 6 0 0 1-17 0M8 15.75L6.5 21.5m9.5-5.75l1.5 5.75M9 7.75c-1.5-1.5 1.5-3 0-5m6 5c-1.5-1.5 1.5-3 0-5");
}
</style><path class="tfg07bb9i"/>`,
		"fallback": "uix:public-bbq-grill",
	});
}

export default Component;
