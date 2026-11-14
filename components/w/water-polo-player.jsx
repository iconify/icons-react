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
		"content": `<style>.zj-yrts-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-6 6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M5.5 17q5-2.25 10 0m0 0l1-10m-11 10l-2-8.5m-1 12q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="zj-yrts-v"/>`,
		"fallback": "uix:water-polo-player",
	});
}

export default Component;
