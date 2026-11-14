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
		"content": `<style>.my5_w-bnq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5L10.5 9M18 2.5L13.5 9m-7 2h11v10.5h-11Zm4-2.5h3V11h-3Zm-1 6.5h5m-5 3h3");
}
</style><path class="my5_w-bnq"/>`,
		"fallback": "uix-sharp:onsite-interview",
	});
}

export default Component;
