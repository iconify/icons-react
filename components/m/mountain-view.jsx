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
		"content": `<style>.ccth78b1e {
  d: path("M3.5 21v-9.5a8.5 8.5 0 0 1 17 0V21Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vrkpj123w {
  d: path("m6.25 21l4-8.75l3.25 5.25l2-2.75l3 6.25");
}
</style><g class="ulnmmdpxh"><path class="ccth78b1e"/><path class="vrkpj123w"/></g>`,
		"fallback": "uix-sharp:mountain-view",
	});
}

export default Component;
