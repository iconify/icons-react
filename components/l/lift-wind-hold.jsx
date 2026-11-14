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
		"content": `<style>.kun0t-bno {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 4.5l19-2m-9.5 1V8H5v7.5h8.5v-2m3 2V21m3.25-5.5V21");
}
</style><path class="kun0t-bno"/>`,
		"fallback": "uix-sharp:lift-wind-hold",
	});
}

export default Component;
