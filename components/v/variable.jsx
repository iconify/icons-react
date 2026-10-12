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
		"content": `<style>.uum_d8bsb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3.75c-2.9 4.9-2.9 11.6 0 16.5m9-16.5c2.9 4.9 2.9 11.6 0 16.5M9.75 9l4.5 6m0-6l-4.5 6");
}
</style><path class="uum_d8bsb"/>`,
		"fallback": "iconoven:variable",
	});
}

export default Component;
