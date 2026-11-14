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
		"content": `<style>.r0_--pbkp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5h14m-3-3l3 3l-3 3m6.5-6v6M3 18.5h5.5m3.5 0h.01m3.49 0H21");
}
</style><path class="r0_--pbkp"/>`,
		"fallback": "uix-sharp:show-whitespace",
	});
}

export default Component;
