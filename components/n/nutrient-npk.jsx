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
		"content": `<style>.iqna2gbhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.5h8c2.5 2.5 3.5 6 3.5 10c0 2.25-1.5 3.5-3.5 3.5H8c-2 0-3.5-1.25-3.5-3.5c0-4 1-7.5 3.5-10Zm0 0L6.5 3h11L16 7.5m-7 6v3m3-3v3m3-3v3");
}
</style><path class="iqna2gbhc"/>`,
		"fallback": "uix-sharp:nutrient-npk",
	});
}

export default Component;
