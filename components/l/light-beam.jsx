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
		"content": `<style>.e82nwpw-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.25H9v3.5H2.5ZM9 8.5h3.5v7H9Zm6.25 3.5h6.25m-6.25-3L21 5.5M15.25 15L21 18.5");
}
</style><path class="e82nwpw-q"/>`,
		"fallback": "uix-sharp:light-beam",
	});
}

export default Component;
