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
		"content": `<style>.y6hfv_kzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15H21M6 9.5h9v2.75H6ZM3.5 15v3M21 15v3m-3.5-3l2-8");
}
</style><path class="y6hfv_kzv"/>`,
		"fallback": "uix-sharp:pilates-reformer",
	});
}

export default Component;
