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
		"content": `<style>.k_0q68bxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 5.75h7V11h2.5l.12.99l1.01 8.27l.12.99H14l-.32-.95l-1.36-4.1l-.32-.95l-.32.95l-1.36 4.1l-.32.95H4.25l.12-.99l1.01-8.27l.12-.99H8V5.75zm-.25.75l-2-3.75m8.5 3.75l2-3.75m-7 5.75h3.5");
}
</style><path class="k_0q68bxm"/>`,
		"fallback": "iconoven:overalls-sharp",
	});
}

export default Component;
