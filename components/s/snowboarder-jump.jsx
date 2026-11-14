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
		"content": `<style>.z5xlqg6gj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5V19Q7 18 11 14.5v6ZM13.668 9.617l5.638-2.053a1.5 1.5 0 0 1 1.923.897a1.5 1.5 0 0 1-.897 1.922l-5.638 2.053a1.5 1.5 0 0 1-1.923-.897a1.5 1.5 0 0 1 .897-1.922M4 13q3.5-7.5 9.5-7.5");
}
</style><path class="z5xlqg6gj"/>`,
		"fallback": "uix:snowboarder-jump",
	});
}

export default Component;
