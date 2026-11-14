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
		"content": `<style>.rroznwb0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5H21m-13-3v-3m4.5 3v-5m4.5 5v-7m-10.5 1l12-7m-3-.5l3 .5l-.5 3");
}
</style><path class="rroznwb0j"/>`,
		"fallback": "uix:sports-analytics",
	});
}

export default Component;
