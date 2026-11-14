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
		"content": `<style>.rr_nzhkah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 3l1 18h7l1-18M7.75 8h8.5m-8 10h7.5");
}
</style><path class="rr_nzhkah"/>`,
		"fallback": "uix-sharp:juice-shot",
	});
}

export default Component;
