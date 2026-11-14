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
		"content": `<style>.cgh-rja4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9.5h11V21h-11Zm3.5-3h4v3h-4Zm2 0v-3h4.5M9.5 14h5m-5 3h3");
}
</style><path class="cgh-rja4x"/>`,
		"fallback": "uix-sharp:shampoo",
	});
}

export default Component;
