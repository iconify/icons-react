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
		"content": `<style>.epk_oib4j {
  d: path("M5.5 14.5h-1a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-1V12h-7Zm0-7.5V4.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1V7");
}

.m567xlbyi {
  d: path("M5.5 12h7v7.5h-7Zm9.25 5.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm4.5 2L21 21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="epk_oib4j"/><path class="m567xlbyi"/></g>`,
		"fallback": "uix-sharp:print-preview",
	});
}

export default Component;
