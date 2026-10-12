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
		"content": `<style>.gwlwxcc7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.5V6h1.5l3 3.75h8.25c2.5 0 4.25 1.25 4.75 3.75Zm17.5-2.5v5M8.5 13.5l-1.25 4m7.25-4l1.25 4m-11.25 0h14.25c-.3 1.5-1.5 2.5-3 2.5H6.5a2 2 0 0 1-2-2Z");
}
</style><path class="gwlwxcc7k"/>`,
		"fallback": "iconoven:seaplane",
	});
}

export default Component;
