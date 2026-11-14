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
		"content": `<style>.q19fywb9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM2.5 9.25h19m-9.5 0V14m-8.5 7.5l3-5L12 14l8.5 7.5");
}
</style><path class="q19fywb9x"/>`,
		"fallback": "uix-sharp:kung-fu-stance",
	});
}

export default Component;
