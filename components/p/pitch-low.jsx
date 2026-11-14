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
		"content": `<style>.bnrxpgt0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12Q5.75 4 9 12t6.5 0m4-8v16m-2-2l2 2l2-2");
}
</style><path class="bnrxpgt0p"/>`,
		"fallback": "uix-sharp:pitch-low",
	});
}

export default Component;
