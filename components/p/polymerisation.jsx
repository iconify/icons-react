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
		"content": `<style>.xa8y3xdow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5H8v5H2.5Zm6.75 0h5.5v5h-5.5Zm6.75 0h5.5v5H16ZM8 12h1.25m5.5 0H16");
}
</style><path class="xa8y3xdow"/>`,
		"fallback": "uix-sharp:polymerisation",
	});
}

export default Component;
