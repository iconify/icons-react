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
		"content": `<style>.k4d3b1b_a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.3 17.5H2.5v-14h17v9.8M6 7.5h10M6 11h10M6 14.5h5m3.75 3.5l2 2L21 15.75");
}
</style><path class="k4d3b1b_a"/>`,
		"fallback": "uix-sharp:rx-approved",
	});
}

export default Component;
