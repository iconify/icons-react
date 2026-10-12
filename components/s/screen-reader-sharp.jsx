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
		"content": `<style>.hqjb_6bxe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h12.5v11H2.75zM6 7.5h6M6 11h3.5M9 14.75v5.5m-3.5 0h7m4.5-14l2.99 3l-2.99 3m2.25-8a7.5 7.5 0 0 1 0 10");
}
</style><path class="hqjb_6bxe"/>`,
		"fallback": "iconoven:screen-reader-sharp",
	});
}

export default Component;
