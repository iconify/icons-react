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
		"content": `<style>.k1z_jc57s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18m-9.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><path class="k1z_jc57s"/>`,
		"fallback": "uix:loan-amount-slider",
	});
}

export default Component;
