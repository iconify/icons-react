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
		"content": `<style>.f-vr4oagt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7h19v10h-19Zm4 0v3.5M10 7v5.5M13.5 7v3.5M17 7v5.5");
}
</style><path class="f-vr4oagt"/>`,
		"fallback": "uix-sharp:ruler-horizontal",
	});
}

export default Component;
