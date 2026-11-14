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
		"content": `<style>.kdlvi8bdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3v18m-2.5 0h5M19 3v18m-2.5 0h5M7.75 10h8.5m-2.5-2.5l2.5 2.5l-2.5 2.5");
}
</style><path class="kdlvi8bdk"/>`,
		"fallback": "uix:light-gate",
	});
}

export default Component;
