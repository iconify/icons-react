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
		"content": `<style>.epv7d79nl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5c0-3.5 2.75-6 6-6s5.75 2.5 5.75 6Zm14.5 1v-18m0 0c1.5-1 3 1 4.5 0V10c-1.5 1-3-1-4.5 0M5 7.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><path class="epv7d79nl"/>`,
		"fallback": "uix:race-marshal",
	});
}

export default Component;
