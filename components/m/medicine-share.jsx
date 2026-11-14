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
		"content": `<style>.unvz5bc3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 5za3 3 0 0 1 3 3v8a3 3 0 0 1-3 3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m-3 7h6m5.75-6a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m0 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M9.5 9.5l6-2.5m-6 7.5l6 2.5");
}
</style><path class="unvz5bc3w"/>`,
		"fallback": "uix:medicine-share",
	});
}

export default Component;
