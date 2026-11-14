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
		"content": `<style>.rn2jd16hr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l2.5 5.75l6 .5l-4.5 4l1.5 6.5L12 16.5l-5.5 3.25l1.5-6.5l-4.5-4l6-.5Z");
}
</style><path class="rn2jd16hr"/>`,
		"fallback": "uix:review-star",
	});
}

export default Component;
