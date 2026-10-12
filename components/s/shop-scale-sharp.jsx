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
		"content": `<style>.vxqjeg1_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 2.75h7.5v6h-7.5zm2.25 3h3m-1.5 3v5.5m-14.75-3h10.5m-5.25 0v3m-5.25 0h18.5v7H2.75zM6 17.75h3");
}
</style><path class="vxqjeg1_e"/>`,
		"fallback": "iconoven:shop-scale-sharp",
	});
}

export default Component;
