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
		"content": `<style>.dwzf82bfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5c0-7.5 19-7.5 19 0c0 3-19 3-19 0M4 18h16M9 10h6");
}
</style><path class="dwzf82bfe"/>`,
		"fallback": "uix:marker-disc",
	});
}

export default Component;
