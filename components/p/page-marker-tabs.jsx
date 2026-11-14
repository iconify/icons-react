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
		"content": `<style>.v6l45ub0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h6.5A3.5 3.5 0 0 1 17 6v12a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18V6A3.5 3.5 0 0 1 7 2.5M17 5h3a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1h-3m0 3h3a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1h-3M7 7.5h6.5m-6.5 4h4.5");
}
</style><path class="v6l45ub0l"/>`,
		"fallback": "uix:page-marker-tabs",
	});
}

export default Component;
