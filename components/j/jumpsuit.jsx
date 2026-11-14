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
		"content": `<style>.rp7k4o8-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 8h8v3l3.5 10.5h-6L12 14l-1.5 7.5h-6L8 11Zm.5-5.5V8m7-5.5V8");
}
</style><path class="rp7k4o8-o"/>`,
		"fallback": "uix-sharp:jumpsuit",
	});
}

export default Component;
