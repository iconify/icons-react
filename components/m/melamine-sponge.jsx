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
		"content": `<style>.vmdpgur-m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 10h11a3.5 3.5 0 0 1 3.5 3.5V16a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 16v-2.5A3.5 3.5 0 0 1 6.5 10m-2-4.5c3-2.5 5 2.5 8 0s5 2.5 8 0");
}
</style><path class="vmdpgur-m"/>`,
		"fallback": "uix:melamine-sponge",
	});
}

export default Component;
