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
		"content": `<style>.zz9lz8c2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.793 18.007c-1.654.49-3.506.743-5.543.743c0-9.5 5.5-15 15-15c0 4.991-1.518 8.879-4.338 11.444M3.75 20.25l1.5-1.5m0 0l8.25-8.25m1.25 7.5l2 2L21 15.75");
}
</style><path class="zz9lz8c2s"/>`,
		"fallback": "uix-sharp:leaf-badge",
	});
}

export default Component;
