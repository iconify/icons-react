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
		"content": `<style>.kee32d_ru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 2.5h6.5A3.75 3.75 0 0 1 19 6.25A3.75 3.75 0 0 1 15.25 10h-6.5A3.75 3.75 0 0 1 5 6.25A3.75 3.75 0 0 1 8.75 2.5m0 11.5h6.5A3.75 3.75 0 0 1 19 17.75a3.75 3.75 0 0 1-3.75 3.75h-6.5A3.75 3.75 0 0 1 5 17.75A3.75 3.75 0 0 1 8.75 14m1.75-4v4m3-4v4");
}
</style><path class="kee32d_ru"/>`,
		"fallback": "uix:pull-buoy",
	});
}

export default Component;
