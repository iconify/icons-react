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
		"content": `<style>.nh394vwwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.645 9.5h12.71a2.625 2.625 0 0 1 2.582 3.095l-1.045 5.75a2.625 2.625 0 0 1-2.583 2.155H6.691a2.625 2.625 0 0 1-2.583-2.155l-1.045-5.75A2.625 2.625 0 0 1 5.645 9.5M7 9.5l3-6m7 6l-3-6M8 13v4m4-4v4m4-4v4");
}
</style><path class="nh394vwwe"/>`,
		"fallback": "uix:shopping-basket",
	});
}

export default Component;
