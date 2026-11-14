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
		"content": `<style>.efo5-ibut {
  d: path("M11.2 21.5H5v-8h6.2M5 16h6.2M5 18.5h6.2m-2.7-8.25h7m-1.5 5h8v6.5h-8Zm0 2.25h8");
}

.otzygylmg {
  d: path("M2.5 21.5V10C6 6 18 6 21.5 10v2.408");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="otzygylmg"/><path class="efo5-ibut"/></g>`,
		"fallback": "uix-sharp:warehouse-club",
	});
}

export default Component;
