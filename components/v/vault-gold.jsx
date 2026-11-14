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
		"content": `<style>.al8fevb0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 20.5l2-7H10l2 7Zm9.5 0l2-7h5.5l2 7Zm-4.75-7l2-7h5.5l2 7Z");
}
</style><path class="al8fevb0e"/>`,
		"fallback": "uix-sharp:vault-gold",
	});
}

export default Component;
