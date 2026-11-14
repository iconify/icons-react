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
		"content": `<style>.n3-nb4pyy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11q9.5-6.5 19 0q-9.5 6.5-19 0ZM6 18h12M7.5 11h9");
}
</style><path class="n3-nb4pyy"/>`,
		"fallback": "uix-sharp:pancake-lens",
	});
}

export default Component;
