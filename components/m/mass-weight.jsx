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
		"content": `<style>.rqxhpvb3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9h10l3 11.5H4Zm2.75-3.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM12 7.5V9");
}
</style><path class="rqxhpvb3y"/>`,
		"fallback": "uix-sharp:mass-weight",
	});
}

export default Component;
