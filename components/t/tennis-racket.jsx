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
		"content": `<style>.itacnbbaq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 9.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0m1.75 4.25L4 20M17.75 8.75l-4 4m1.5-6.5l-4 4");
}
</style><path class="itacnbbaq"/>`,
		"fallback": "uix:tennis-racket",
	});
}

export default Component;
