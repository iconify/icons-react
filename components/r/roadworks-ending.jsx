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
		"content": `<style>.dou4ohbzs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.25 15.5l3.5-13h2l3.5 13m-1.95 3H2.5v-3h10.8M6.5 7H11m-5.5 4H12m2.75 7l2 2L21 15.75");
}
</style><path class="dou4ohbzs"/>`,
		"fallback": "uix-sharp:roadworks-ending",
	});
}

export default Component;
