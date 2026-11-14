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
		"content": `<style>.or1it1ita {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5q3.25-2.5 6.5 0l-.5 13q-2.75 5-5.5 0Zm11.5 0q3.25-2.5 6.5 0l-.5 13q-2.75 5-5.5 0ZM2.25 11h8m3.5 0h8");
}
</style><path class="or1it1ita"/>`,
		"fallback": "uix:shin-guards-pair",
	});
}

export default Component;
