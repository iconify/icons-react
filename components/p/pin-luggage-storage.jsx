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
		"content": `<style>.ye4obnb-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5.5h5A3.5 3.5 0 0 1 18 9v7a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 16V9a3.5 3.5 0 0 1 3.5-3.5m0 0v-3h5v3M9.5 9v7m5-7v7");
}
</style><path class="ye4obnb-z"/>`,
		"fallback": "uix:pin-luggage-storage",
	});
}

export default Component;
