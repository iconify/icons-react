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
		"content": `<style>.ddoxfbtyk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 2.5l5.5 8h2l5.5-8m-9.375 10h5.75a2.625 2.625 0 0 1 2.625 2.625v3.75a2.625 2.625 0 0 1-2.625 2.625h-5.75A2.625 2.625 0 0 1 6.5 18.875v-3.75A2.625 2.625 0 0 1 9.125 12.5m2.875-2v2M10 15h4m-5 3.5h6");
}
</style><path class="ddoxfbtyk"/>`,
		"fallback": "uix:staff-lanyard",
	});
}

export default Component;
