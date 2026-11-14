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
		"content": `<style>.ga2ts6g1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-2.5 4l-2.5-4h-5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2m4 6h7");
}
</style><path class="ga2ts6g1o"/>`,
		"fallback": "uix:tooltip-bottom",
	});
}

export default Component;
