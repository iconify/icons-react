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
		"content": `<style>.dzxey3vwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13.5c0-6.25 3.5-9 7.25-9s6 3 6 7.5l3.25 1.5Zm0 0L3.5 20l8-1v-5.5");
}
</style><path class="dzxey3vwo"/>`,
		"fallback": "uix:legionnaire-cap",
	});
}

export default Component;
