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
		"content": `<style>.zfc6njb7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 12.25a4.75 4.75 0 0 1 9.5 0m-13.25 0h15.4m.2 0h3.4m-10.5-7v-2m-5 4L4.75 6M16 7.25L17.25 6M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="zfc6njb7q"/>`,
		"fallback": "uix:summer-solstice",
	});
}

export default Component;
