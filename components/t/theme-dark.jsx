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
		"content": `<style>.w3mviqbuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.25 15.25a6.75 6.75 0 1 1-8.5-8.5a5.5 5.5 0 0 0 8.5 8.5ZM17.5 2.5l.707 2.293L20.5 5.5l-2.293.707L17.5 8.5l-.707-2.293L14.5 5.5l2.293-.707Z");
}
</style><path class="w3mviqbuv"/>`,
		"fallback": "uix-sharp:theme-dark",
	});
}

export default Component;
