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
		"content": `<style>.jl59ifbgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20q7-7.5 14 0M2.5 20h19M3 4.5h14M6 8h15M3 11.5h11");
}
</style><path class="jl59ifbgi"/>`,
		"fallback": "uix:sandstorm",
	});
}

export default Component;
