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
		"content": `<style>.gqeoszepj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m.5 4l-2.5 6m-5-4L10 8l4 .5l2.5 3.5M5 18.5l3.5-1l3-3l4 2.5l-.5 4.5");
}
</style><path class="gqeoszepj"/>`,
		"fallback": "uix:pin-evacuation",
	});
}

export default Component;
