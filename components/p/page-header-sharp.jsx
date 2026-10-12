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
		"content": `<style>.tsc967hvb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75h16.5V7.5H3.75zm0 7v11.5h16.5V9.75M7.5 13.5h9m-9 3.5h6");
}
</style><path class="tsc967hvb"/>`,
		"fallback": "iconoven:page-header-sharp",
	});
}

export default Component;
