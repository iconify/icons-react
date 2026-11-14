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
		"content": `<style>.y0flzwneh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 20.5h10L19 9H5Zm2.5-15a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-1 9h7");
}
</style><path class="y0flzwneh"/>`,
		"fallback": "uix:package-weight",
	});
}

export default Component;
