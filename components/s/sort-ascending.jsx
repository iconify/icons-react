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
		"content": `<style>.tbijfss_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4v16m-3-3l3 3l3-3m3-11h4m-4 6H19m-6.5 6h9");
}
</style><path class="tbijfss_q"/>`,
		"fallback": "uix-sharp:sort-ascending",
	});
}

export default Component;
