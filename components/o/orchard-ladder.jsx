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
		"content": `<style>.iol2tnb7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 21.5L9 3.5h2l1.5 18M11 3.5l8.5 18m-12-12h4m-5.5 6h6");
}
</style><path class="iol2tnb7n"/>`,
		"fallback": "uix-sharp:orchard-ladder",
	});
}

export default Component;
