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
		"content": `<style>.ozz_fjb0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.9 3H21v14.1M17.1 21H3V6.9m9.4 1.6H17M7 12h1.1m7.8 0H17M7 15.5h4.6m-8.1-12l17 17");
}
</style><path class="ozz_fjb0v"/>`,
		"fallback": "uix-sharp:vent-closed",
	});
}

export default Component;
