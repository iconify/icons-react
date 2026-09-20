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
		"content": `<style>.r86n-tb0j {
  fill: currentColor;
  d: path("M8 18q-2.507 0-4.253-1.745Q2 14.509 2 12.004t1.747-4.255T8 6h8q2.507 0 4.254 1.745T22 11.996t-1.747 4.255T16 18zm.558-3.308h.884v-2.25h2.25v-.884h-2.25v-2.25h-.884v2.25h-2.25v.884h2.25zm7.25 0h.884V9.308h-2.384v.884h1.5z");
}
</style><path class="r86n-tb0j"/>`,
		"fallback": "material-symbols-light:voting-chip",
	});
}

export default Component;
