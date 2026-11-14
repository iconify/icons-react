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
		"content": `<style>.lidgz10fa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5H21m-13-3v-2.75m4.5 2.75v-2.75m0-2.75V9.25M17 17.5v-2.75M17 12V9.25m0-2.75V3.75");
}
</style><path class="lidgz10fa"/>`,
		"fallback": "uix:traffic-volume-chart",
	});
}

export default Component;
