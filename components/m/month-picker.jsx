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
		"content": `<style>.zgoiwsb8u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5h17v15.5h-17ZM8 3v4m8-4v4M3.5 10h17m-14 3.5h2m2.5 0h2m2.5 0h2M6.5 17h2m2.5 0h2m2.5 0h2");
}
</style><path class="zgoiwsb8u"/>`,
		"fallback": "uix-sharp:month-picker",
	});
}

export default Component;
