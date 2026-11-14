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
		"content": `<style>.cx251xv7u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7h7a3.5 3.5 0 0 1 3.5 3.5v3A3.5 3.5 0 0 1 13 17H6a3.5 3.5 0 0 1-3.5-3.5v-3A3.5 3.5 0 0 1 6 7m0 5h4.5m9-7.5v15m-2-15h4m-4 15h4");
}
</style><path class="cx251xv7u"/>`,
		"fallback": "uix:rename",
	});
}

export default Component;
