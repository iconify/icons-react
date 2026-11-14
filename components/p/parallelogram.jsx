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
		"content": `<style>.d7yfvwcvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.414 5h7.985a2.625 2.625 0 0 1 2.499 3.428l-2.812 8.75a2.625 2.625 0 0 1-2.5 1.822H6.601a2.625 2.625 0 0 1-2.499-3.428l2.812-8.75A2.625 2.625 0 0 1 9.414 5");
}
</style><path class="d7yfvwcvf"/>`,
		"fallback": "uix:parallelogram",
	});
}

export default Component;
