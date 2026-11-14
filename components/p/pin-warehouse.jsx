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
		"content": `<style>.lmqu8p5zx {
  d: path("M2.5 9L12 3.5L21.5 9v12h-19Z");
}

.m7dyfqbmr {
  d: path("M7 21v-8h10v8M7 17h10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lmqu8p5zx"/><path class="m7dyfqbmr"/></g>`,
		"fallback": "uix-sharp:pin-warehouse",
	});
}

export default Component;
