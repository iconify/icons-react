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
		"content": `<style>.kvvuj4i_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9h12v4c0 2.5-2 4-6 4s-6-1.5-6-4Zm12 1c3.5 0 3.5 4.5 0 4.5m-13 6h14");
}
</style><path class="kvvuj4i_n"/>`,
		"fallback": "uix-sharp:tea-cup-saucer",
	});
}

export default Component;
