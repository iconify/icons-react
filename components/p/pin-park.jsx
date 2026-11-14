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
		"content": `<style>.wlro9lh7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4h16v6H4Zm-1.5 9h19v3h-19Zm4-3v3M5 16v4m12.5-10v3m1.5 3v4");
}
</style><path class="wlro9lh7n"/>`,
		"fallback": "uix-sharp:pin-park",
	});
}

export default Component;
