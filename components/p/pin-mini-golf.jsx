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
		"content": `<style>.f9kj8plwr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 3l11 3.75L8 10.5Zm0 0v16m-5 0a6.5 2.25 0 1 0 13 0a6.5 2.25 0 1 0-13 0Z");
}
</style><path class="f9kj8plwr"/>`,
		"fallback": "uix-sharp:pin-mini-golf",
	});
}

export default Component;
