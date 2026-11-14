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
		"content": `<style>.a5k62hzsz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 6.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M3 20.5c0-4.25 3-7 7-7c1.068 0 2.137.183 3.049.548M15.75 16h4.5A1.75 1.75 0 0 1 22 17.75v2a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 14 19.75v-2A1.75 1.75 0 0 1 15.75 16m.75 0v-1.5h3V16");
}
</style><path class="a5k62hzsz"/>`,
		"fallback": "uix:literary-agent",
	});
}

export default Component;
