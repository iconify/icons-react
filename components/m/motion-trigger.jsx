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
		"content": `<style>.akz_jcbvr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 2.5L9.5 13H14l-2 8.5l8.5-11h-5ZM4 7h5m-6.5 5h4M4 17h5");
}
</style><path class="akz_jcbvr"/>`,
		"fallback": "uix-sharp:motion-trigger",
	});
}

export default Component;
