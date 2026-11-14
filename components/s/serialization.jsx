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
		"content": `<style>.lbt-w-btp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5H10v8H2.5Zm11.5 0h7.5v8H14Zm-7.75 11v3a2.5 2.5 0 0 0 2.5 2.5h6.5a2.5 2.5 0 0 0 2.5-2.5v-3M4 16.75l2.25-2.25l2.25 2.25m7 0l2.25-2.25L20 16.75");
}
</style><path class="lbt-w-btp"/>`,
		"fallback": "uix-sharp:serialization",
	});
}

export default Component;
