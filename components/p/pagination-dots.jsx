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
		"content": `<style>.w-mna90ts {
  fill: currentColor;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10.5h4A1.5 1.5 0 0 1 10 12a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 3 12a1.5 1.5 0 0 1 1.5-1.5m8.25 1.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><path class="w-mna90ts"/>`,
		"fallback": "uix:pagination-dots",
	});
}

export default Component;
