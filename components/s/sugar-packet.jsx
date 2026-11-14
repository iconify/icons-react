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
		"content": `<style>.uk6lcib6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 4l1-1l1 1l1-1l1 1l1-1l1 1l1-1l1 1v16l-1 1l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1l-1-1Zm0 5.5h8m-8 5h8");
}
</style><path class="uk6lcib6h"/>`,
		"fallback": "uix-sharp:sugar-packet",
	});
}

export default Component;
