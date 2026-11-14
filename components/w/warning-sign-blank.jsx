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
		"content": `<style>.twejvabwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.307 7.25l5.088 9.373a2.625 2.625 0 0 1-2.307 3.877H6.912a2.625 2.625 0 0 1-2.307-3.877L9.693 7.25a2.625 2.625 0 0 1 4.614 0");
}
</style><path class="twejvabwq"/>`,
		"fallback": "uix:warning-sign-blank",
	});
}

export default Component;
