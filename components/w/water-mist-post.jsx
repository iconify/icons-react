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
		"content": `<style>.n94bt7qqb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 20.5h11m-7.5 0v-12m4 12v-12m-6-4h8v4H8Zm-3.5-1h.01m-1.01 3h.01m.99 3h.01m14.99-6h.01m.99 3h.01m-1.01 3h.01");
}
</style><path class="n94bt7qqb"/>`,
		"fallback": "uix-sharp:water-mist-post",
	});
}

export default Component;
