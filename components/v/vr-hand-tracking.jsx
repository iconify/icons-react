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
		"content": `<style>.p3v_l9b0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 11.5l3.25 5C7 19.5 9 21 11.5 21q.494 0 .933-.064m4.067-7.691V7m-9-2.5V13m3-10v10m3-9v9m3 3h4a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-1l-1-1.5l-1 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="p3v_l9b0q"/>`,
		"fallback": "uix:vr-hand-tracking",
	});
}

export default Component;
