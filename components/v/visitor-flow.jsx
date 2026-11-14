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
		"content": `<style>.tuocq52wf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 3.5h6A1.75 1.75 0 0 1 12 5.25v13.5a1.75 1.75 0 0 1-1.75 1.75h-6a1.75 1.75 0 0 1-1.75-1.75V5.25A1.75 1.75 0 0 1 4.25 3.5M2.5 7H12M4.5 5.25h.01m2.24 0h.01M5 10.5h4.5m-4.5 3h3m5.5-1.5L21 5m-.5 3.25L21 5l-3.25.25M13.5 12h8M19 14l2.5-2l-2.5-2m-5.5 2l7.5 7m-3.25-.25L21 19l-.5-3.25");
}
</style><path class="tuocq52wf"/>`,
		"fallback": "uix:visitor-flow",
	});
}

export default Component;
