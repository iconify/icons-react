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
		"content": `<style>.b0p_eyqwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6q3-2 6 0t6 0m-12 6q3-2 6 0t6 0m-12 6q3-2 6 0t6 0m5-14v16m-2.25-2.25L19.5 20l2.25-2.25");
}
</style><path class="b0p_eyqwb"/>`,
		"fallback": "uix-sharp:ocean-depth",
	});
}

export default Component;
