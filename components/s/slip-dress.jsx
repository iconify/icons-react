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
		"content": `<style>.k63gtmbga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7.5q4.5 3 9 0L17 12l2.5 6.5l-15 3L7 12Zm0 0l1-5m8 5l-1-5");
}
</style><path class="k63gtmbga"/>`,
		"fallback": "uix:slip-dress",
	});
}

export default Component;
