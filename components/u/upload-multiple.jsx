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
		"content": `<style>.z5xuwuwgf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3M7.5 13V3.5M5 6l2.5-2.5L10 6m6.5 7V3.5M14 6l2.5-2.5L19 6");
}
</style><path class="z5xuwuwgf"/>`,
		"fallback": "uix:upload-multiple",
	});
}

export default Component;
