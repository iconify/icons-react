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
		"content": `<style>.czxa5cjji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h10v18h-10Zm0 6h10m-10 6h10m6-2.5s-2.75 3.25-2.75 5.25a2.75 2.75 0 0 0 5.5 0c0-2-2.75-5.25-2.75-5.25Z");
}
</style><path class="czxa5cjji"/>`,
		"fallback": "uix-sharp:petrochemical",
	});
}

export default Component;
