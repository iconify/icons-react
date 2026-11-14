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
		"content": `<style>.yllasd9hi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5h6L9 10L7.5 7.5h-2L4 10Zm3-14V3m6 14q4-3.5 8 0m-6-1.25l-1-3.75m3 3.25V11m2 4.75l1-3.75");
}
</style><path class="yllasd9hi"/>`,
		"fallback": "uix:lash-glue",
	});
}

export default Component;
