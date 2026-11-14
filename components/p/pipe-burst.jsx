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
		"content": `<style>.pmfcgvuba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5h7l1.25 2l-1.25 2l1.25 2H2.5m19-6h-8l1.25 2l-1.25 2l1.25 2h6.75m-9.5-9v-6m-3.5 6L6.5 5m9 4.5l2-4.5");
}
</style><path class="pmfcgvuba"/>`,
		"fallback": "uix-sharp:pipe-burst",
	});
}

export default Component;
