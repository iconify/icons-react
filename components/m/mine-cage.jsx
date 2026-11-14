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
		"content": `<style>.hqzo8ncai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7m-3.5 0v3M4.5 9L12 5.5L19.5 9m-15 0h15v12h-15Zm5 0v12m5-12v12");
}
</style><path class="hqzo8ncai"/>`,
		"fallback": "uix-sharp:mine-cage",
	});
}

export default Component;
