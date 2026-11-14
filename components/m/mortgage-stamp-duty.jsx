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
		"content": `<style>.o37rbkbdi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 8V5a2 2 0 0 1 4 0v3M6.75 8h10.5A1.75 1.75 0 0 1 19 9.75a1.75 1.75 0 0 1-1.75 1.75H6.75A1.75 1.75 0 0 1 5 9.75A1.75 1.75 0 0 1 6.75 8m-.25 5.75h11m-8.9 4.8l2.5-1.875a1.5 1.5 0 0 1 1.8 0l2.5 1.875a1.5 1.5 0 0 1 .6 1.2v.5a1.25 1.25 0 0 1-1.25 1.25h-5.5A1.25 1.25 0 0 1 8 20.25v-.5a1.5 1.5 0 0 1 .6-1.2");
}
</style><path class="o37rbkbdi"/>`,
		"fallback": "uix:mortgage-stamp-duty",
	});
}

export default Component;
