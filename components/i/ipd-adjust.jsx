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
		"content": `<style>.on-7_b2iu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.75c2-4 6-4 8 0c-2 4-6 4-8 0m11 0c2-4 6-4 8 0c-2 4-6 4-8 0m-7 0h.01m10.99 0h.01M5 16.5h14M7.5 14L5 16.5L7.5 19m9-5l2.5 2.5l-2.5 2.5");
}
</style><path class="on-7_b2iu"/>`,
		"fallback": "uix:ipd-adjust",
	});
}

export default Component;
