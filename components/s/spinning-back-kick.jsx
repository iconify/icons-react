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
		"content": `<style>.r7ox72bmm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m2.75 5l1.5 4l-1.5 7.5M10 14l11.5-3M4.638 17.5a7 7 0 0 1-.372-8.515");
}
</style><path class="r7ox72bmm"/>`,
		"fallback": "uix:spinning-back-kick",
	});
}

export default Component;
