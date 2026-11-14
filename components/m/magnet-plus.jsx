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
		"content": `<style>.tucas3brx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15V9a5.75 5.75 0 0 1 11.5 0v6h-3.75V9a2 2 0 0 0-4 0v6Zm0-2.75h3.75m4 0h3.75M18 15v6m-3-3h6");
}
</style><path class="tucas3brx"/>`,
		"fallback": "uix:magnet-plus",
	});
}

export default Component;
