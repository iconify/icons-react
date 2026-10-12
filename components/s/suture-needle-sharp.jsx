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
		"content": `<style>.n7m4o__wq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.61 9.94a8 8 0 0 1 14.78 0m0 0c1 3.5-.5 8.81-4.64 8.81c-2 0-2.5-2-1-2.5s2.25 1.5.75 3.25c-1.25 1.25-3.5 1.75-7 1.75");
}
</style><path class="n7m4o__wq"/>`,
		"fallback": "iconoven:suture-needle-sharp",
	});
}

export default Component;
