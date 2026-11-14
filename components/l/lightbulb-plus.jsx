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
		"content": `<style>.lwszuh8_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 15a6.5 6.5 0 1 1 5 0v2.5h-5ZM8 20.5h3.5M18 15v6m-3-3h6");
}
</style><path class="lwszuh8_z"/>`,
		"fallback": "uix:lightbulb-plus",
	});
}

export default Component;
