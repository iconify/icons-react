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
		"content": `<style>.m-yrpzbfi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3v18h18M8 17.5v-4m4.5 4V10m4.5 7.5v-11");
}
</style><path class="m-yrpzbfi"/>`,
		"fallback": "uix-sharp:repo-traffic",
	});
}

export default Component;
