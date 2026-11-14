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
		"content": `<style>.td81q50no {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.5 3v18m-3-14h3m-3 5h3m-3 5h3m-18 2.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m3.25-1.25L15 9.5");
}
</style><path class="td81q50no"/>`,
		"fallback": "uix:mower-height-lever",
	});
}

export default Component;
