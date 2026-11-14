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
		"content": `<style>.qqrw054oq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-3 13.5c0-4 3-6.5 6.5-6.5s6.5 2.5 6.5 6.5M14.25 5a6 6 0 0 1 0 6m2.5-8.5a9.5 9.5 0 0 1 0 11");
}
</style><path class="qqrw054oq"/>`,
		"fallback": "uix:opera-singer",
	});
}

export default Component;
