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
		"content": `<style>.jk93k3eyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.25 6.25v-2.5H5.75L12 12m0 0l-6.25 8.25h12.5v-2.5");
}
</style><path class="jk93k3eyj"/>`,
		"fallback": "iconoven:sigma-sharp",
	});
}

export default Component;
