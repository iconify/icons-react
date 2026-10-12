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
		"content": `<style>.v3zvw62pv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 16V9.25H16V14h4.25v7.25H11.5V16h1Zm2.5-1.5v2.25m-9.5 2.5V3.5M4 6l2.5-2.5L9 6");
}
</style><path class="v3zvw62pv"/>`,
		"fallback": "iconoven:swipe-up-sharp",
	});
}

export default Component;
