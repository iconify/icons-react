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
		"content": `<style>.jgx_ou4hp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 10a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M10 2.5V4m-7.5 6H4m.75-5.25l1 1m9.5-1l-1 1m-9.5 9.5l1-1M18 15v6m-3-3h6");
}
</style><path class="jgx_ou4hp"/>`,
		"fallback": "uix:overexposed",
	});
}

export default Component;
