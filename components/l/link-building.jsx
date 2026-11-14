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
		"content": `<style>.gwf0m2baw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 12l-3 3a3.5 3.5 0 0 0 5 5l3-3m0-10l3-3a3.5 3.5 0 0 1 5 5l-3 3m-8.25 3.25l6.5-6.5M18 15v6m-3-3h6");
}
</style><path class="gwf0m2baw"/>`,
		"fallback": "uix:link-building",
	});
}

export default Component;
