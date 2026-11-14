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
		"content": `<style>.ytacfobln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4v17m0-9a4.5 4.5 0 0 0 9 0V4m0 8v2.5A2.5 2.5 0 0 0 18 17");
}
</style><path class="ytacfobln"/>`,
		"fallback": "uix-sharp:mu-symbol",
	});
}

export default Component;
