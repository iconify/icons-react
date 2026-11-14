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
		"content": `<style>.pffqf3bly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 14.75a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4 0h.01M10.25 12l8.25-8.25M17 2.5l3.25 3.25M2.5 21.5h19m-6.5 0v-3m3 3V18");
}
</style><path class="pffqf3bly"/>`,
		"fallback": "uix:lawn-edger",
	});
}

export default Component;
