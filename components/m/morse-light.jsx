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
		"content": `<style>.wgp35rb4p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6.5h7V5h2v11h-2v-1.5H4A1.5 1.5 0 0 1 2.5 13V8A1.5 1.5 0 0 1 4 6.5Zm2.5 8v5m9.25-9h.01m2.74 0h3");
}
</style><path class="wgp35rb4p"/>`,
		"fallback": "uix-sharp:morse-light",
	});
}

export default Component;
