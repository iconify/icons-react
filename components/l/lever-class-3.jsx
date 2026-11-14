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
		"content": `<style>.qsq8e-91g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5h19m-16 0l3 6.5h-6Zm11-6h5v6h-5Zm-3.5 14v-5m-2 2l2-2l2 2");
}
</style><path class="qsq8e-91g"/>`,
		"fallback": "uix-sharp:lever-class-3",
	});
}

export default Component;
