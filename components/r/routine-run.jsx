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
		"content": `<style>.hp2sorbwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6A2.25 2.25 0 1 0 7 6a2.25 2.25 0 1 0-4.5 0m7.25 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M17 6a2.25 2.25 0 1 0 4.5 0A2.25 2.25 0 1 0 17 6M7 6h2.75m4.5 0H17m-2 7.5l6.5 4l-6.5 4Z");
}
</style><path class="hp2sorbwy"/>`,
		"fallback": "uix:routine-run",
	});
}

export default Component;
