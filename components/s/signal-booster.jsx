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
		"content": `<style>.r8rrehb5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21v-6m4.5 6V10M13 21v-2.1m0-2.8V4m5 17v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="r8rrehb5g"/>`,
		"fallback": "uix-sharp:signal-booster",
	});
}

export default Component;
