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
		"content": `<style>.un2zl1bmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5V2.5h4V5m-3.875 0h3.75A2.625 2.625 0 0 1 16.5 7.625v1.25a2.625 2.625 0 0 1-2.625 2.625h-3.75A2.625 2.625 0 0 1 7.5 8.875v-1.25A2.625 2.625 0 0 1 10.125 5M10 11.5V21m4-9.5V21m-9.5 0h15");
}
</style><path class="un2zl1bmz"/>`,
		"fallback": "uix:makiwara",
	});
}

export default Component;
