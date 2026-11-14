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
		"content": `<style>.ib0finppw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM3 20.5c0-3.5 2.75-5.75 6.5-5.75S16 17 16 20.5M15 4.25a3.5 3.5 0 0 1 0 7m2.5 3.5c2 .5 3.5 2.25 3.5 5.75");
}
</style><path class="ib0finppw"/>`,
		"fallback": "uix-sharp:users-round",
	});
}

export default Component;
