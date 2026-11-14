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
		"content": `<style>.c0ucrlcpw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 2.5v6h8v-6m-4 6v4M3 21a7.75 7.75 0 0 1 9.5-9.5A7.75 7.75 0 0 1 3 21m2.5-2.5L10 14m-4.25 2.75l1.5 1.5m1-4l1.5 1.5");
}
</style><path class="c0ucrlcpw"/>`,
		"fallback": "uix:touchdown",
	});
}

export default Component;
