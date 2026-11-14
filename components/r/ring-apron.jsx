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
		"content": `<style>.d7bbteblf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 13h14.5A1.75 1.75 0 0 1 21 14.75v5a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 19.75v-5A1.75 1.75 0 0 1 4.75 13M5 3.5V13m14-9.5V13M5 6.75h14M5 10h14");
}
</style><path class="d7bbteblf"/>`,
		"fallback": "uix:ring-apron",
	});
}

export default Component;
