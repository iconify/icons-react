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
		"content": `<style>.hv6r2ubub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 9h1.578a1.75 1.75 0 0 0 1.171-.449L10 6.75a1.498 1.498 0 0 1 2.5 1.113v8.274A1.498 1.498 0 0 1 10 17.25l-2.001-1.801A1.75 1.75 0 0 0 6.828 15H5.25a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 5.25 9m9.725.525a3.5 3.5 0 0 1 0 4.95M17 6.638a7 7 0 0 1 0 10.724");
}
</style><path class="hv6r2ubub"/>`,
		"fallback": "uix:volume-high",
	});
}

export default Component;
