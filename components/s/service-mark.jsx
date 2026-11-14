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
		"content": `<style>.zx6kzobqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 7.75c-.5-2-2-3-4.25-3c-2.5 0-4.25 1.5-4.25 3.75c0 4.75 9 2.5 9 7.75c0 2.5-2 3.75-4.75 3.75c-2.5 0-4.25-1.25-4.75-3.25m12.25-6.5v-6l2.5 3.25l2.5-3.25v6");
}
</style><path class="zx6kzobqy"/>`,
		"fallback": "uix-sharp:service-mark",
	});
}

export default Component;
