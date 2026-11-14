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
		"content": `<style>.metnzbh7i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12a6.5 6.5 0 0 1 13 0a8 8 0 0 1-16 0a9.5 9.5 0 0 1 16.25-6.75M13 8.75v6.5m-2.75-5l5.5 3.5m-5.5 0l5.5-3.5");
}
</style><path class="metnzbh7i"/>`,
		"fallback": "uix:polar-vortex",
	});
}

export default Component;
