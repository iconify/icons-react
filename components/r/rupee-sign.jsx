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
		"content": `<style>.iye_nsb2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4h4c2.5 0 4.25 1.75 4.25 4.25s-1.75 4.5-4.25 4.5h-4l9 7.75M6.5 4H18M6.5 8.25H18");
}
</style><path class="iye_nsb2g"/>`,
		"fallback": "uix:rupee-sign",
	});
}

export default Component;
