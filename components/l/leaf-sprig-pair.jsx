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
		"content": `<style>.mn63etnjy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 21l8-8m0 0c0-4 3.5-7.5 7.5-7.5c0 4-3.5 7.5-7.5 7.5m-4 4c-3-2-4.5-6.5-3.5-10.5C9 8.5 10.5 13 9 17");
}
</style><path class="mn63etnjy"/>`,
		"fallback": "uix:leaf-sprig-pair",
	});
}

export default Component;
