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
		"content": `<style>.zonpoqbfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 14.5l5.5-11l5.5 11m-8.75-4h6.5M3.5 19h17m-15-2l-2 2l2 2m13-4l2 2l-2 2");
}
</style><path class="zonpoqbfa"/>`,
		"fallback": "uix:letter-spacing",
	});
}

export default Component;
