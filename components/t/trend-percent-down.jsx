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
		"content": `<style>.jttf06bbh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 17.5l7-11m-7.25 1a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m4 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M17 3.5V20m-3.5-3.5L17 20l3.5-3.5");
}
</style><path class="jttf06bbh"/>`,
		"fallback": "uix:trend-percent-down",
	});
}

export default Component;
