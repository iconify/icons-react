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
		"content": `<style>.eoib79lgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 8H2.5v8H8m8-8h5.5v8H16M8 5.5h8v13H8ZM12 9v6");
}
</style><path class="eoib79lgg"/>`,
		"fallback": "uix-sharp:powerlifter",
	});
}

export default Component;
