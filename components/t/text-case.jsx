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
		"content": `<style>.hy6jhqtyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19L7 5l4.5 14m-7.25-4.5h5.5m3.75 1a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm7-4V19");
}
</style><path class="hy6jhqtyb"/>`,
		"fallback": "uix-sharp:text-case",
	});
}

export default Component;
