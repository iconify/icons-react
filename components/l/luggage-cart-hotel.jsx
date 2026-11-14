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
		"content": `<style>.jj4cqro4t {
  d: path("M4.25 19.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM10.5 5h8v5h-8ZM9 10h11v7.5H9Z");
}

.ozx59q5us {
  d: path("M3.5 2.5H6v15h14.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ozx59q5us"/><path class="jj4cqro4t"/></g>`,
		"fallback": "uix-sharp:luggage-cart-hotel",
	});
}

export default Component;
