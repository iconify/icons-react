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
		"content": `<style>.doai6z_jk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13.5h9l-1 7h-7Zm4.5 0v-5c-.25-3-2.25-5-5.25-5c0 3 2.25 5 5.25 5C8.25 5.25 10.25 3 13.25 3c0 3-2 5.5-5.25 5.5m7.25 9a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}
</style><path class="doai6z_jk"/>`,
		"fallback": "uix-sharp:plant-search",
	});
}

export default Component;
