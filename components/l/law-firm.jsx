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
		"content": `<style>.z_3uimb-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 8l9-5l9 5Zm0 12.5h18M5.5 10.75v7m4.25-7v7m4.5-7v7m4.25-7v7");
}
</style><path class="z_3uimb-q"/>`,
		"fallback": "uix-sharp:law-firm",
	});
}

export default Component;
