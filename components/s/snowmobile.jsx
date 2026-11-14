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
		"content": `<style>.apvpsabgy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 13h6a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 3 15.5A2.5 2.5 0 0 1 5.5 13m0 0v-2.5h4l2-3H14l5.5 5.5H16m-2.5-5.5l-1-3H15m2 8.5v7m-2 0h5.5a1.5 1.5 0 0 0 1.5-1.5");
}
</style><path class="apvpsabgy"/>`,
		"fallback": "uix:snowmobile",
	});
}

export default Component;
