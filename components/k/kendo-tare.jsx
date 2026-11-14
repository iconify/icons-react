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
		"content": `<style>.cs833gbbo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 4h15.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H4.25A1.75 1.75 0 0 1 2.5 5.75A1.75 1.75 0 0 1 4.25 4M8.5 7.5v11a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-11m-11 0V14a2 2 0 0 0 2 2h2m7 0h2a2 2 0 0 0 2-2V7.5");
}
</style><path class="cs833gbbo"/>`,
		"fallback": "uix:kendo-tare",
	});
}

export default Component;
