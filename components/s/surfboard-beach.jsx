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
		"content": `<style>.nf4hepfnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21C5 14 8 6 12 3c4 3 7 11 4 18c-3.5 1-5 1-8 0m4-17.5v17");
}
</style><path class="nf4hepfnr"/>`,
		"fallback": "uix:surfboard-beach",
	});
}

export default Component;
