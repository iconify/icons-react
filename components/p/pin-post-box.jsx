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
		"content": `<style>.ln4pm4byx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8c0-4 13-4 13 0ZM7 8v13.5M17 8v13.5m-12 0h14M9.5 11.25h5");
}
</style><path class="ln4pm4byx"/>`,
		"fallback": "uix:pin-post-box",
	});
}

export default Component;
