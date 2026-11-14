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
		"content": `<style>.khza3tu8m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19m-17 0L7 18h10l2.5-11.5M3 12.25h2.75m12.5 0H21M2.5 21h19");
}
</style><path class="khza3tu8m"/>`,
		"fallback": "uix:skip-container",
	});
}

export default Component;
