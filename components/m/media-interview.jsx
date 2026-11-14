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
		"content": `<style>.wrd2djbsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 7.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M2.5 21c0-4.25 2.5-7 5.5-7s5.5 2.75 5.5 7M14 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m1.25 5.5c2.5 0 4.5.5 5.75 1.75M18.25 15za1.5 1.5 0 0 1 1.5 1.5v1.75a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5V16.5a1.5 1.5 0 0 1 1.5-1.5m0 4.75v2");
}
</style><path class="wrd2djbsv"/>`,
		"fallback": "uix:media-interview",
	});
}

export default Component;
