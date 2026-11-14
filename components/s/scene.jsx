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
		"content": `<style>.p999t0bnq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 9a3 3 0 0 0 0 6Zm7.25-1.25a4.25 4.25 0 0 0 0 8.5a7 7 0 0 1 0-8.5ZM4.25 12h-2M6 8L4.5 6.5M6 16l-1.5 1.5M10 6.25v-2m0 13.5v2");
}
</style><path class="p999t0bnq"/>`,
		"fallback": "uix-sharp:scene",
	});
}

export default Component;
