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
		"content": `<style>.d_gisc70a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19v3.5h-19Zm4-6.5h11v3h-11Zm2.5 3V13m6-3.5V13");
}
</style><path class="d_gisc70a"/>`,
		"fallback": "uix-sharp:plastering-float",
	});
}

export default Component;
