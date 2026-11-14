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
		"content": `<style>.j9s74yrfi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3.5h6.5a5.25 5.25 0 0 1 5.25 5.25v6.5a5.25 5.25 0 0 1-5.25 5.25h-6.5a5.25 5.25 0 0 1-5.25-5.25v-6.5A5.25 5.25 0 0 1 8.75 3.5M9 5v14m6-14v14M5 9h14M5 15h14");
}
</style><path class="j9s74yrfi"/>`,
		"fallback": "uix:waffle",
	});
}

export default Component;
