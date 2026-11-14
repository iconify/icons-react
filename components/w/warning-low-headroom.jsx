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
		"content": `<style>.lcufbybhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v3.5h-19Zm0 18h10M9 9.5v8m-3-3l3 3l3-3m6 0V18m0 3h.01");
}
</style><path class="lcufbybhj"/>`,
		"fallback": "uix-sharp:warning-low-headroom",
	});
}

export default Component;
