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
		"content": `<style>.gi_g0ykoj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 15.5v-11h6V9l5.5 2c2.25.75 3.5 2 3.5 4.5Zm.5 3.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="gi_g0ykoj"/>`,
		"fallback": "uix-sharp:skating",
	});
}

export default Component;
