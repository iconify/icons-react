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
		"content": `<style>.u029h8b-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12m-6 0v2l3.5 1.75l-7 3.25l7 3.25L12 14.5V16m-3.5 0h7l2 5.5h-11Z");
}
</style><path class="u029h8b-o"/>`,
		"fallback": "uix-sharp:mass-on-spring",
	});
}

export default Component;
