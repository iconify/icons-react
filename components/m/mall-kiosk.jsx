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
		"content": `<style>.xt9ijbc6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 5l3.772-2.095a1.5 1.5 0 0 1 1.456 0L16.5 5a1.334 1.334 0 0 1-.648 2.5H8.148A1.334 1.334 0 0 1 7.5 5m-2.25 7h13.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 18.75 18H5.25a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 5.25 12M5 7.5V12m14-4.5V12M6 20a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m9 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><path class="xt9ijbc6r"/>`,
		"fallback": "uix:mall-kiosk",
	});
}

export default Component;
