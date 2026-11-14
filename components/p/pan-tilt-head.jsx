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
		"content": `<style>.zroz1ab0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5.5h15m-12-3l-3 3l3 3m9-6l3 3l-3 3M6 21.5l4-5V10h4v6.5l4 5m-8-5h4");
}
</style><path class="zroz1ab0w"/>`,
		"fallback": "uix:pan-tilt-head",
	});
}

export default Component;
