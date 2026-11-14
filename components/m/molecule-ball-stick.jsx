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
		"content": `<style>.oq-b-iegf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m6.5-7a3 3 0 1 0 6 0a3 3 0 1 0-6 0m6.5 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-8-2.25l2.5-2.5m4 0l2.5 2.5");
}
</style><path class="oq-b-iegf"/>`,
		"fallback": "uix:molecule-ball-stick",
	});
}

export default Component;
