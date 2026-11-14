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
		"content": `<style>.feb0_jixg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7Q7.25 4 12 7t9.5 0m-19 5q4.75-3 9.5 0t9.5 0m-19 5q4.75-3 9.5 0t9.5 0");
}
</style><path class="feb0_jixg"/>`,
		"fallback": "uix-sharp:ocean-swell",
	});
}

export default Component;
