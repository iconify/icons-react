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
		"content": `<style>.w1j4khnly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 21.5l3-17.5m6 17.5L13.5 4m-11 3A2.25 2.25 0 1 0 7 7a2.25 2.25 0 1 0-4.5 0Zm2.25 2.25V17M17 7a2.25 2.25 0 1 0 4.5 0A2.25 2.25 0 1 0 17 7Zm2.25 2.25V17");
}
</style><path class="w1j4khnly"/>`,
		"fallback": "uix-sharp:tree-lined-road",
	});
}

export default Component;
