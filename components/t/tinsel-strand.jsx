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
		"content": `<style>.bh1qtqbag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8L4 13l1.5-3.5l1.5 5L8.75 11l1.5 4.75L12 12l1.75 3.75l1.5-4.75L17 14.5l1.5-5L20 13l1.5-5");
}
</style><path class="bh1qtqbag"/>`,
		"fallback": "uix-sharp:tinsel-strand",
	});
}

export default Component;
