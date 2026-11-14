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
		"content": `<style>.rj3gryb6s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3v18m15-18v18M4.5 7h15m-15 10h15M9.5 7v10m5-10v10");
}
</style><path class="rj3gryb6s"/>`,
		"fallback": "uix-sharp:pet-gate",
	});
}

export default Component;
