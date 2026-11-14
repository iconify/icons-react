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
		"content": `<style>.g0la-kbfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 20.5H2.5V4h17v7.9M7 2v4m8-4v4M2.5 9h17M18 14.75v3.5M18 21h.01");
}
</style><path class="g0la-kbfm"/>`,
		"fallback": "uix-sharp:planned-outage",
	});
}

export default Component;
