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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.izn6zub8v {
  d: path("M2.5 20q3.75-3 7.5 0t7.5 0c1.5-1 3-1.5 4-1.5");
}

.w8j00abun {
  d: path("M12 3v8M8.5 5l7 4m-7 0l7-4m-13 10.5q3.75-3 7.5 0t7.5 0c1.5-1 3-1.5 4-1.5");
}
</style><g class="hntgybcog"><path class="w8j00abun"/><path class="izn6zub8v"/></g>`,
		"fallback": "uix:powder-snow",
	});
}

export default Component;
