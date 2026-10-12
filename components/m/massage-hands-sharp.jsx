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
		"content": `<style>.efijv3b9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 12V4.5h2.5V11m0-.5V3H13v7.5m0 0V3.75h2.5v6.75m0 .5V5.75H18v6.5c0 3.3-2.45 5.5-5.5 5.5H9.015L7.4 15.65L5.1 12.5l-.617-1.133l2.1-1.5L7.2 11l.8 1m-5 9.25c3-.9 6-1.15 9-1.15s6 .25 9 1.15M20.25 5.5L22 7.25L20.25 9");
}
</style><path class="efijv3b9x"/>`,
		"fallback": "iconoven:massage-hands-sharp",
	});
}

export default Component;
