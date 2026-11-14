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
		"content": `<style>.y6way5b0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20h17M7 16.5q-2.625-3 0-6t0-6m5 12q-2.625-3 0-6t0-6m5 12q-2.625-3 0-6t0-6");
}
</style><path class="y6way5b0o"/>`,
		"fallback": "uix-sharp:vapour",
	});
}

export default Component;
