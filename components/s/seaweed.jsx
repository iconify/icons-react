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
		"content": `<style>.u3l7ywbic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 20.5q-2.25-3 0-6c2.25-3 1.5-4 0-6S5.5 4.75 7 2.75m5.5 17.75q2.25-3 0-6c-2.25-3-1.5-4 0-6s1.5-3 .5-4.75m4.5 16.75c-1.25-1.75-1.25-3.25 0-5s1.25-3.25 0-5M2.75 21.25h18.5");
}
</style><path class="u3l7ywbic"/>`,
		"fallback": "iconoven:seaweed",
	});
}

export default Component;
