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
		"content": `<style>.e859q3v-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5q9 2.5 18 0q-2 7 0 14q-9-2.5-18 0q2-7 0-14m9 7h.01");
}
</style><path class="e859q3v-a"/>`,
		"fallback": "uix:pillow",
	});
}

export default Component;
