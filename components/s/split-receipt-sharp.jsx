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
		"content": `<style>.jxphtsbxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h8v18.5l-2.5-1.5l-2.5 1.5l-2.5-1.5l-2.5 1.5V2.75zm1 5h4m-4 3.5h2.5m6.25.75h2L20 7.5M16.5 12l3.5 4.5m-2.5-9H20V10m-2.5 6.5H20V14");
}
</style><path class="jxphtsbxf"/>`,
		"fallback": "iconoven:split-receipt-sharp",
	});
}

export default Component;
