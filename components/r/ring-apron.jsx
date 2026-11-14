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
		"content": `<style>.hk_i23cbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13h18v8.5H3Zm2-9.5V13m14-9.5V13M5 6.75h14M5 10h14");
}
</style><path class="hk_i23cbc"/>`,
		"fallback": "uix-sharp:ring-apron",
	});
}

export default Component;
