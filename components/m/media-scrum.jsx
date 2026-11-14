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
		"content": `<style>.cmhs6jbau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 6a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M6.5 21.5V19a5.5 5.5 0 0 1 11 0v2.5M2.75 8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M4 9.75L2.75 15.5m15-7.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M20 9.75l1.25 5.75");
}
</style><path class="cmhs6jbau"/>`,
		"fallback": "uix:media-scrum",
	});
}

export default Component;
