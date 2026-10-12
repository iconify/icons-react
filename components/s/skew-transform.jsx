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
		"content": `<style>.npylnnbkp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 9h11q1.5 0 .6 1.2l-2.7 3.6q-.9 1.2-2.4 1.2h-11q-1.5 0-.6-1.2l2.7-3.6Q7.25 9 8.75 9M8.5 4.5h9M16 3l1.5 1.5L16 6m-.5 13.5h-9M8 18l-1.5 1.5L8 21");
}
</style><path class="npylnnbkp"/>`,
		"fallback": "iconoven:skew-transform",
	});
}

export default Component;
