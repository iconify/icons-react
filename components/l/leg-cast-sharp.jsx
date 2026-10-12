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
		"content": `<style>.xqwswfbvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.75h6.25v11l1.64.6l2.22.8l1.64.6v5.5H6.75V2.75zm-1.75 4h8m-8 4h8");
}
</style><path class="xqwswfbvf"/>`,
		"fallback": "iconoven:leg-cast-sharp",
	});
}

export default Component;
