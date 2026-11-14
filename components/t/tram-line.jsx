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
		"content": `<style>.w73igwbas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 21.5l4.5-19m9.5 19l-4.5-19M3.5 18h17m-15-6h13M7 6h10");
}
</style><path class="w73igwbas"/>`,
		"fallback": "uix:tram-line",
	});
}

export default Component;
