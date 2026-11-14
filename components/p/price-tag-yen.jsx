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
		"content": `<style>.l2-noumcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 4.5h11v15h-11l-5-7.5ZM8.25 12h.01m2.99-3.25L14 12.5m2.75-3.75L14 12.5m0 0V16m-2.25-3.25h4.5m-4.5 1.75h4.5");
}
</style><path class="l2-noumcq"/>`,
		"fallback": "uix-sharp:price-tag-yen",
	});
}

export default Component;
