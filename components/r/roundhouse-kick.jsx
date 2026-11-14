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
		"content": `<style>.kyywfqb8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 4.75l2 4.75l-1 8m1-8l11-4.5m-17 3.5L12 9m3.5 11.75a9.5 9.5 0 0 0 3.5-6.5");
}
</style><path class="kyywfqb8z"/>`,
		"fallback": "uix:roundhouse-kick",
	});
}

export default Component;
