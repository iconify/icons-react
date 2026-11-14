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
		"content": `<style>.r5l8bpbmi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19v11h-19Zm3.5 3v5m4-5v5m4-5v5m4-5v5m-10 0h.01m3.99 0h.01m3.99 0h.01");
}
</style><path class="r5l8bpbmi"/>`,
		"fallback": "uix-sharp:ip-address",
	});
}

export default Component;
