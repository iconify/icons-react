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
		"content": `<style>.ezvsif8oa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.125 7.5h3.75a2.625 2.625 0 0 1 2.625 2.625v3.75a2.625 2.625 0 0 1-2.625 2.625h-3.75A2.625 2.625 0 0 1 7.5 13.875v-3.75A2.625 2.625 0 0 1 10.125 7.5M10 4h4m-4 16h4M4 10v4m16-4v4");
}
</style><path class="ezvsif8oa"/>`,
		"fallback": "uix:table-for-four",
	});
}

export default Component;
