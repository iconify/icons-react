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
		"content": `<style>.w3uw2dbpd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 11V2.75M4.6 11H15V7.1q0-.6.08-1.19l.34-2.57l.08-.59l.32.51l1.11 1.73l.32.51l.57.18l2.86.89l.57.18V9.5l-.59.08l-2.32.34l-.59.08v6h-1.5v5.25H14V16H8v5.25H5.75V16H4v-5zM4 13.5h13.75M4 11.75L2.75 13.5");
}
</style><path class="w3uw2dbpd"/>`,
		"fallback": "iconoven:pinata-sharp",
	});
}

export default Component;
