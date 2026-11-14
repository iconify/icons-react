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
		"content": `<style>.qtxpg0baa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5c4 0 5.5-1.5 8-2.5S14 4.5 17 4c2-.25 3.5-1 4.5-1.5M2.5 12C6 12 8 13 11 12s5.5.5 10.5 0m-19 1.5c4 0 5.5 1.5 8 2.5s3.5 3.5 6.5 4c2 .25 3.5 1 4.5 1.5");
}
</style><path class="qtxpg0baa"/>`,
		"fallback": "uix-sharp:nerve",
	});
}

export default Component;
