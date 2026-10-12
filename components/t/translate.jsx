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
		"content": `<style>.wby8cvb-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 5.75h9m-4.5-2v2m2.75 0c-.6 3.65-3 6.5-6.75 8m2.25-4.5c1 1.75 2.5 3 4.25 3.75m2 7.25l3.75-9l3.75 9m-6.25-3h5");
}
</style><path class="wby8cvb-g"/>`,
		"fallback": "iconoven:translate",
	});
}

export default Component;
