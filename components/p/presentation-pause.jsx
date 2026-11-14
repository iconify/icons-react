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
		"content": `<style>.ygn4cy8ch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19V16h-19Zm5.5 19l2-5.5m6 5.5L14 16m-4-9.5V12m4-5.5V12");
}
</style><path class="ygn4cy8ch"/>`,
		"fallback": "uix-sharp:presentation-pause",
	});
}

export default Component;
