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
		"content": `<style>.wdt7gwlme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 9h9v9h-9Zm0 0l3-3h9v9l-3 3m0-9l3-3m-19 7.5h4.25M4.25 11l2.5 2.5l-2.5 2.5");
}
</style><path class="wdt7gwlme"/>`,
		"fallback": "uix:view-front",
	});
}

export default Component;
