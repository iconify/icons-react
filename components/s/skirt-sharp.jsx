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
		"content": `<style>.d5u_qi73s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.75h11v3h-11zm1.5 6h9.5l.4 1.45l2.45 8.85l.4 1.45H3.25l.4-1.45L6.1 10.2l.4-1.45zm2 .5L8.8 20M14 9.25L15.2 20");
}
</style><path class="d5u_qi73s"/>`,
		"fallback": "iconoven:skirt-sharp",
	});
}

export default Component;
