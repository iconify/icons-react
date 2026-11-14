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
		"content": `<style>.mo--btecs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 16.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m7-3L20 4m-3 3l2.5 2.5m-5 0l2 2m.25 4L15 18l1.75 2.5m2.5-5L21 18l-1.75 2.5");
}
</style><path class="mo--btecs"/>`,
		"fallback": "uix:key-api",
	});
}

export default Component;
