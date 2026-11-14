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
		"content": `<style>.g57xnf58h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20q7-7.5 14 0M2.5 20h19M3 4.5h14M6 8h15M3 11.5h11");
}
</style><path class="g57xnf58h"/>`,
		"fallback": "uix-sharp:sandstorm",
	});
}

export default Component;
