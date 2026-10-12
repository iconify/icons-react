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
		"content": `<style>.g-vof3b8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 10a7.5 7.5 0 0 1 13.5-3.6m1 7.6a7.5 7.5 0 0 1-13.5 3.6M18.5 2.75V6.5h-3.75M5.5 21.25V17.5h3.75M9 9h6v6H9z");
}
</style><path class="g-vof3b8r"/>`,
		"fallback": "iconoven:reverse-logistics-sharp",
	});
}

export default Component;
