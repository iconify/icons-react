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
		"content": `<style>.p8mk4vbmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.931 4.508zA1.5 1.5 0 0 1 5.75 5.601l2.298 9.218a1.5 1.5 0 0 1-1.093 1.818a1.5 1.5 0 0 1-1.818-1.092L2.839 6.327a1.5 1.5 0 0 1 1.092-1.819M5.25 17h13.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 5.25 17");
}
</style><path class="p8mk4vbmj"/>`,
		"fallback": "uix:laptop-open-side",
	});
}

export default Component;
