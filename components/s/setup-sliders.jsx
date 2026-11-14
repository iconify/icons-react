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
		"content": `<style>.m4283v3at {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h10.25m4.5 0h4.25M2.5 12h3.25m4.5 0H21.5m-19 7.5h12.25m4.5 0h2.25m-8.75-15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-7 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m9 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><path class="m4283v3at"/>`,
		"fallback": "uix:setup-sliders",
	});
}

export default Component;
