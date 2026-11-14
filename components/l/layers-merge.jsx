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
		"content": `<style>.dlxav7bci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 10.5l9 4.75L12 20l-9-4.75Zm-7.5-8L12 7m7.5-4.5L12 7");
}
</style><path class="dlxav7bci"/>`,
		"fallback": "uix-sharp:layers-merge",
	});
}

export default Component;
