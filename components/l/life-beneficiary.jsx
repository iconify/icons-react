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
		"content": `<style>.vtdu9w56g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 7a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M8.5 21c0-4 2.5-6 6-6s6 2 6 6m-18-9H9M6.5 9.5L9 12l-2.5 2.5");
}
</style><path class="vtdu9w56g"/>`,
		"fallback": "uix:life-beneficiary",
	});
}

export default Component;
