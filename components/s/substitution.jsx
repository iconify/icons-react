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
		"content": `<style>.lkmkn4n_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6.5h17M17 3l3.5 3.5L17 10m3.5 7.5h-17M7 14l-3.5 3.5L7 21");
}
</style><path class="lkmkn4n_f"/>`,
		"fallback": "uix:substitution",
	});
}

export default Component;
