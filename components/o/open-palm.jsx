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
		"content": `<style>.o_beg3b7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 11v4.5l-2.5-2.25A1.75 1.75 0 0 0 5 15.5l3.25 4a6 6 0 0 0 4.75 2a6 6 0 0 0 6-6v-4m-9-.5V5.5m3 5v-7m3 7V4m3 7.5v-5");
}
</style><path class="o_beg3b7p"/>`,
		"fallback": "uix:open-palm",
	});
}

export default Component;
