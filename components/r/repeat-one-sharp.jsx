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
		"content": `<style>.g7vyowb3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 11V6.75h15.5m-3-3l3 3l-3 3m2 3.25v4.25H3.75m3 3l-3-3l3-3m4.5-3.5l1-.75v4.5");
}
</style><path class="g7vyowb3y"/>`,
		"fallback": "iconoven:repeat-one-sharp",
	});
}

export default Component;
