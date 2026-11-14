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
		"content": `<style>.g6hn_rvyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6.5h17M17 3l3.5 3.5L17 10m3.5 7.5h-17M7 14l-3.5 3.5L7 21");
}
</style><path class="g6hn_rvyj"/>`,
		"fallback": "uix-sharp:substitution",
	});
}

export default Component;
