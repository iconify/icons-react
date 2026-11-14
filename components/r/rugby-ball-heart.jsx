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
		"content": `<style>.vq-i2cbom {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5a12 12 0 0 1 14-14a12 12 0 0 1-14 14m4-4l6-6m-6 4l2 2m0-4l2 2m0-4l2 2m6 12.75l-2.5-2.5a1.75 1.75 0 0 1 2.5-2.5a1.75 1.75 0 0 1 2.5 2.5Z");
}
</style><path class="vq-i2cbom"/>`,
		"fallback": "uix:rugby-ball-heart",
	});
}

export default Component;
