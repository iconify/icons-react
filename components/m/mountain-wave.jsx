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
		"content": `<style>.cwx1r5bbb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 20.5l7-8L12 15l3.5-4l6 9.5M2.5 6c3-3.5 6-3.5 9.5-.5s6.5 3 9.5-.5");
}
</style><path class="cwx1r5bbb"/>`,
		"fallback": "uix-sharp:mountain-wave",
	});
}

export default Component;
