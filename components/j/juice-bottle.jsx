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
		"content": `<style>.z1dgzacza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5h5v3h-5Zm.5 3V8c0 1.5-3 2-3 4.5V20a1.5 1.5 0 0 0 1.5 1.5h7A1.5 1.5 0 0 0 17 20v-7.5c0-2.5-3-3-3-4.5V5.5M7 14h10M7 18h10");
}
</style><path class="z1dgzacza"/>`,
		"fallback": "uix-sharp:juice-bottle",
	});
}

export default Component;
