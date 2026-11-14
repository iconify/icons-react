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
		"content": `<style>.mvp0i1bgr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 2.5c1.75 2 2.5 3.25 2.5 4.25a2.5 2.5 0 0 1-5 0c0-1 .75-2.25 2.5-4.25m-12.5 4v13a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-13m-6 3.5H7m-2.5 3H7m-2.5 3h6");
}
</style><path class="mvp0i1bgr"/>`,
		"fallback": "uix:precipitation-amount",
	});
}

export default Component;
