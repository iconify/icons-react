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
		"content": `<style>.r6c63o2yp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3c6 3 6 15 0 18m19-18c-6 3-6 15 0 18m-12-11q1.25-1.25 2.5 0t2.5 0m-5 4q1.25-1.25 2.5 0t2.5 0");
}
</style><path class="r6c63o2yp"/>`,
		"fallback": "uix:strait",
	});
}

export default Component;
