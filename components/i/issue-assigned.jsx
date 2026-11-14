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
		"content": `<style>.no_c1nbpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 19a8 8 0 1 1 8-8m-8 0h.01m5.24 4.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-1.5 5.75C14.75 20 16.2 19 18 19s3.25 1 3.25 2.5");
}
</style><path class="no_c1nbpv"/>`,
		"fallback": "uix:issue-assigned",
	});
}

export default Component;
