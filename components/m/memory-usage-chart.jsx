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
		"content": `<style>.p5srjg_on {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.75h19v13h-19Zm3.5 13v4m4-4v4m4-4v4m4-4v4M7.5 14v-3m4.5 3V9m4.5 5V6.5");
}
</style><path class="p5srjg_on"/>`,
		"fallback": "uix-sharp:memory-usage-chart",
	});
}

export default Component;
