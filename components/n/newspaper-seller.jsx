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
		"content": `<style>.u5ivw2oeg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 7a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M3 21.5c0-4 2.75-6.75 6.5-6.75c.917 0 1.835.21 2.559.438M16 21.5h4.5a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1za1.5 1.5 0 0 1-1.5-1.5v-3.5H16");
}
</style><path class="u5ivw2oeg"/>`,
		"fallback": "uix:newspaper-seller",
	});
}

export default Component;
