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
		"content": `<style>.wani1ubbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 15.5v-8L12 3l3 4.5v8m-9.5 0h13v3h-13Zm-2.5 3h18v3H3Zm6-11h6");
}
</style><path class="wani1ubbv"/>`,
		"fallback": "uix-sharp:pin-monument",
	});
}

export default Component;
