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
		"content": `<style>.h1dg_2byg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h18L14 10v3.5l-4 2V10Zm9 15c.9 1.15 1.5 1.85 1.5 2.5a1.5 1.5 0 0 1-3 0c0-.65.6-1.35 1.5-2.5Z");
}
</style><path class="h1dg_2byg"/>`,
		"fallback": "uix-sharp:lead-conversion-rate",
	});
}

export default Component;
