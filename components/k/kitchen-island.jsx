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
		"content": `<style>.qkqf8ybbx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h19v2.5h-19Zm2 2.5v10h15v-10m-7.5 0v10M15 9V6.5h2.25");
}
</style><path class="qkqf8ybbx"/>`,
		"fallback": "uix-sharp:kitchen-island",
	});
}

export default Component;
