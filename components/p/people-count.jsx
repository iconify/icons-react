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
		"content": `<style>.m06zi9bnd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0M7.5 20c0-4 2-6.5 4.5-6.5c1.244 0 2.364.619 3.175 1.733M2.5 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 8.5c0-2.25.75-3.5 2-3.75m13-4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0M18 15v6m-3-3h6");
}
</style><path class="m06zi9bnd"/>`,
		"fallback": "uix:people-count",
	});
}

export default Component;
