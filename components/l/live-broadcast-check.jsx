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
		"content": `<style>.xoue20wkr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.3 15.5H2.5v-12H16v11.8m0-7.8l5.5-3v7.835m-2.05 1.047L16 11.5m-4.5-4h.01M14.75 18l2 2L21 15.75");
}
</style><path class="xoue20wkr"/>`,
		"fallback": "uix-sharp:live-broadcast-check",
	});
}

export default Component;
