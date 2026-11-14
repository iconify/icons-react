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
		"content": `<style>.wl54_fb7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 16h17v4.5h-17Zm1-6.5h15V14h-15Zm1-6.5h13v4.5h-13Z");
}
</style><path class="wl54_fb7t"/>`,
		"fallback": "uix-sharp:towel-stack",
	});
}

export default Component;
