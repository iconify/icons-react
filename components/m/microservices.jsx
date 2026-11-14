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
		"content": `<style>.mf6xf9boq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7v7h-7Zm-6 12h7v7h-7Zm12 0h7v7h-7Zm-5 3.5h5M10 9.5l-4 5m8-5l4 5");
}
</style><path class="mf6xf9boq"/>`,
		"fallback": "uix-sharp:microservices",
	});
}

export default Component;
