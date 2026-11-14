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
		"content": `<style>.zhblpyfgq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15 21.5V3m-4 4l4-4l4 4m-4 13L5 10m4.5 0H5v4.5");
}
</style><path class="zhblpyfgq"/>`,
		"fallback": "uix:lane-arrow-straight-slight-left",
	});
}

export default Component;
