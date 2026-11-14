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
		"content": `<style>.ef113kb6u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 7a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0M3.5 21.5c0-4.5 3.25-7.25 7.5-7.25c1.25 0 2.5.25 3.5.75m.25 3l2 2L21 15.75");
}
</style><path class="ef113kb6u"/>`,
		"fallback": "uix:trusted-contact",
	});
}

export default Component;
