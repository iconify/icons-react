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
		"content": `<style>.q7d9e3b8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 19c-1-6-.5-13 3.25-16.5c2.823 2.635 3.804 7.252 3.69 11.934M2.5 19h9.7M9 8v6.5m6 1.5c1.25-.5 2.5-.5 3.5.5c1-1 2.25-1 3.5-.5v5c-1.25-.5-2.5-.5-3.5.5c-1-1-2.25-1-3.5-.5Zm3.5.5v5");
}
</style><path class="q7d9e3b8r"/>`,
		"fallback": "uix:surf-school",
	});
}

export default Component;
