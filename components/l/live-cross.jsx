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
		"content": `<style>.ml2c7ab3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.5 9.5l5 5m0-5l-5 5M7.822 7.021a6.5 6.5 0 0 1 8.356 0m0 9.958a6.5 6.5 0 0 1-8.356 0M5.894 4.723a9.5 9.5 0 0 1 12.212 0m0 14.554a9.5 9.5 0 0 1-12.212 0");
}
</style><path class="ml2c7ab3w"/>`,
		"fallback": "uix:live-cross",
	});
}

export default Component;
