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
		"content": `<style>.g4iklj8jx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m6.75-2.75L19.5 3M17 5.5L19.5 8m-5.5.5l2 2m-.5 11a2.25 2.25 0 0 1-.25-4.5a2.75 2.75 0 0 1 5 .75a1.9 1.9 0 0 1-.5 3.75Z");
}
</style><path class="g4iklj8jx"/>`,
		"fallback": "uix:kms-key",
	});
}

export default Component;
