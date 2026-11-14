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
		"content": `<style>.m77o2xbip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 3.5l14 6L12 12l-2.5 6.5Zm9.25 14.25a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM15 20.5l5.5-5.5");
}
</style><path class="m77o2xbip"/>`,
		"fallback": "uix-sharp:null-pointer",
	});
}

export default Component;
