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
		"content": `<style>.h29n_cogh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7c-4.5 2-6.5 5.5-6.5 9S5 21.5 9 21.5h3c1.154 0 2.182-.166 3.062-.487m2.306-9.379C16.337 9.785 14.579 8.146 12 7M9 7L7 2.5h7L12 7M7.5 7h6M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="h29n_cogh"/>`,
		"fallback": "uix-sharp:sandbag-carry",
	});
}

export default Component;
