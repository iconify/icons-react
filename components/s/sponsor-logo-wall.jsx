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
		"content": `<style>.ik2l7vg2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h7.5v7.5H3Zm13.4 7.5h-2.9V3H21v7.5h-1.9m-8.6 6V21H3v-7.5h7.5v.7m7.25-.2l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}
</style><path class="ik2l7vg2m"/>`,
		"fallback": "uix-sharp:sponsor-logo-wall",
	});
}

export default Component;
