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
		"content": `<style>.hr-zhp_pj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.75 9.5l-1 1a4 4 0 0 0 5.75 5.75l1-1m-2-9.5l1-1a4 4 0 0 1 5.75 5.75l-1 1m-7 1.25l4.5-4.5M16 14.5h1.629a1.5 1.5 0 0 1 1.06.439l2 2a1.5 1.5 0 0 1 0 2.122l-1.628 1.628a1.5 1.5 0 0 1-2.122 0l-2-2a1.5 1.5 0 0 1-.439-1.06V16a1.5 1.5 0 0 1 1.5-1.5m.75 2.25h.01");
}
</style><path class="hr-zhp_pj"/>`,
		"fallback": "uix:utm-link",
	});
}

export default Component;
