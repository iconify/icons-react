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
		"content": `<style>.tp8avkb9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75h16.5v18.5H3.75zm0 9.25h16.5m-13-6v3.25M9.75 6v3.25m2.75-3l1.75 3m-7 6v3m8.5-3v3");
}
</style><path class="tp8avkb9s"/>`,
		"fallback": "iconoven:wall-shelf-sharp",
	});
}

export default Component;
