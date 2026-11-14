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
		"content": `<style>.y6sl3jr7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.3 18.5H2.5v-15h18v8.8M6 8h10.5M6 12h6.5m2.25 6l2 2L21 15.75");
}
</style><path class="y6sl3jr7p"/>`,
		"fallback": "uix-sharp:post-check",
	});
}

export default Component;
