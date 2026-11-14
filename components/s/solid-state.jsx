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
		"content": `<style>.bgfveg5si {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-14 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-14 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><path class="bgfveg5si"/>`,
		"fallback": "uix:solid-state",
	});
}

export default Component;
