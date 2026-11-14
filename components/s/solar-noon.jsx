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
		"content": `<style>.qqll9ebha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19m-18 0a8.5 8.5 0 0 1 3-6.5m11 0a8.5 8.5 0 0 1 3 6.5M9.25 11.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm2.75-8V6m0 11v3");
}
</style><path class="qqll9ebha"/>`,
		"fallback": "uix-sharp:solar-noon",
	});
}

export default Component;
