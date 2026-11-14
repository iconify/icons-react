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
		"content": `<style>.w3qmr_fpo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 8a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4 6.75V21m3.5-7.25l3 5.5m-10-5.5l-3 5.5m12.25-7.75l3.5 1.75m-15-1.75l-3.5 1.75");
}
</style><path class="w3qmr_fpo"/>`,
		"fallback": "uix:ultraviolet",
	});
}

export default Component;
