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
		"content": `<style>.p74nch6vw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h17V6h-17Zm0 15.5h17v3.5h-17Zm2-12v12m13-12v12m-10-5.5L12 9l3.5 3.5v3h-7Z");
}
</style><path class="p74nch6vw"/>`,
		"fallback": "uix-sharp:mortgage-title-deed",
	});
}

export default Component;
