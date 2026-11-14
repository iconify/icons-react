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
		"content": `<style>.b4kigyboh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 6L12 4l1.25 2m6.5 11.5l1.25 2h-2.25m-13.5 0H3l1.25-2m10.25-9l1.25 2m1.5 2.5l1.25 2m-2.75 4.5H13.5m-3 0H8.25M5.5 15l1.25-2m1.5-2.5l1.25-2");
}
</style><path class="b4kigyboh"/>`,
		"fallback": "uix:triangle-dashed",
	});
}

export default Component;
