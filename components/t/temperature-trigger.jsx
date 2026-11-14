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
		"content": `<style>.i-_1i6o5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 13.75V5.5a2.75 2.75 0 0 1 5.5 0v8.25a4.5 4.5 0 1 1-5.5 0m2.75 3.5V11m11.75 2.75l-3 4h3.25l-2.75 3.75");
}
</style><path class="i-_1i6o5m"/>`,
		"fallback": "uix:temperature-trigger",
	});
}

export default Component;
