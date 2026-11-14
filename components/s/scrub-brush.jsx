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
		"content": `<style>.mt_s6h94v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h12v5h-12Zm10 0l8-8M5 16v3m3.5-3v3m3.5-3v3");
}
</style><path class="mt_s6h94v"/>`,
		"fallback": "uix-sharp:scrub-brush",
	});
}

export default Component;
