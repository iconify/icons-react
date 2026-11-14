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
		"content": `<style>.zdvrbi9pm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7v2.75h-7Zm0 5.5h7v2.75h-7Zm0 5.5h7v2.75h-7Zm0 5.5h7v2.75h-7Z");
}
</style><path class="zdvrbi9pm"/>`,
		"fallback": "uix-sharp:spine",
	});
}

export default Component;
