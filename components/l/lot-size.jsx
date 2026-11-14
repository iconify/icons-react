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
		"content": `<style>.rzxhhr26v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6V3h3m12 0h3v3m0 6v3h-3M6 15H3v-3m7-9h4m-4 12h4M3 8v2m18-2v2M3 19.5h18m-16-2l-2 2l2 2m14-4l2 2l-2 2");
}
</style><path class="rzxhhr26v"/>`,
		"fallback": "uix-sharp:lot-size",
	});
}

export default Component;
