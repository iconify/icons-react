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
		"content": `<style>.di27vj9md {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 11h16l-3 9h-16Zm2 0V7m0 0L6 4.75M7.5 7L9 4.75M13.5 11V7m0 0L12 4.75M13.5 7L15 4.75M19.5 11V7m0 0L18 4.75M19.5 7L21 4.75");
}
</style><path class="di27vj9md"/>`,
		"fallback": "uix-sharp:vegetable-patch",
	});
}

export default Component;
