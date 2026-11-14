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
		"content": `<style>.fo-wz0jax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15c0-2 2.5-3.5 6.5-3.5c3 0 5 1 7 1.5l3.5.5v3l-3.5.5c-2 .5-4 1.5-7 1.5C5.5 18.5 3 17 3 15m6.5 0h.01M19 10.75c-1.4-.85-1.6-2.65 0-5.25c1.6 2.6 1.4 4.4 0 5.25");
}
</style><path class="fo-wz0jax"/>`,
		"fallback": "uix:oil-lamp-bronze",
	});
}

export default Component;
