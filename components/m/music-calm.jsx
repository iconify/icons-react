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
		"content": `<style>.amqab95wm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 13v-1.5a7.5 7.5 0 0 1 15 0V13m-16 0h4v7h-4Zm13 0h4v7h-4Z");
}
</style><path class="amqab95wm"/>`,
		"fallback": "uix-sharp:music-calm",
	});
}

export default Component;
