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
		"content": `<style>.pb84izb_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v5.5h-19Zm1 17.5L6 9.5m14.5 12L18 9.5m-10 0L11 4m2 5.5L16 4m-4 9v6");
}
</style><path class="pb84izb_b"/>`,
		"fallback": "uix-sharp:road-blocked",
	});
}

export default Component;
