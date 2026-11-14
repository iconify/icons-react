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
		"content": `<style>.m5cbsub9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m3.5-1.5L20 4m-8.5 0H20v8.5");
}
</style><path class="m5cbsub9e"/>`,
		"fallback": "uix:vector",
	});
}

export default Component;
