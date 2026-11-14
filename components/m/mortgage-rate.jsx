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
		"content": `<style>.wfqfne57t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m7.5 7.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 15L15 3m-.25 14.25l3.5-2.75l3.5 2.75m-7 0h7m-5.5 0v4.25m4-4.25v4.25m-5.5 0h7");
}
</style><path class="wfqfne57t"/>`,
		"fallback": "uix:mortgage-rate",
	});
}

export default Component;
