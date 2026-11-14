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
		"content": `<style>.kfl2wq76h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 5.75l1.5-3h14l1.5 3Zm3 9.25h11L16 21H8Zm5.5 0V9.5m0 2.75q-5 0-5.5-3.75q3 .25 5.5 3.75m0 0q5 0 5.5-3.75q-3 .25-5.5 3.75");
}
</style><path class="kfl2wq76h"/>`,
		"fallback": "uix-sharp:smart-garden",
	});
}

export default Component;
