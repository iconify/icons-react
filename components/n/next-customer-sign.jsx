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
		"content": `<style>.rlvv26bck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 14l2-3.5h13l2 3.5Zm-1 0h19v5.5h-19Zm3-3.5l1 3.5m-1.25 2.75h.01m13.49 0h.01");
}
</style><path class="rlvv26bck"/>`,
		"fallback": "uix-sharp:next-customer-sign",
	});
}

export default Component;
