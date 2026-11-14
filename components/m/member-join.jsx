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
		"content": `<style>.v2px9tsll {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3.5 21c0-4 3-6.5 7-6.5c1.358 0 2.601.288 3.65.825M18 15v6m-3-3h6");
}
</style><path class="v2px9tsll"/>`,
		"fallback": "uix:member-join",
	});
}

export default Component;
