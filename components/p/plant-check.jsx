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
		"content": `<style>.mhdb8rb5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.722 18.945L11.5 20.5h-7l-1-7h9l-.467 3.267M8 13.5v-5c-.25-3-2.25-5-5.25-5c0 3 2.25 5 5.25 5C8.25 5.25 10.25 3 13.25 3c0 3-2 5.5-5.25 5.5m6.75 9.5l2 2L21 15.75");
}
</style><path class="mhdb8rb5p"/>`,
		"fallback": "uix-sharp:plant-check",
	});
}

export default Component;
