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
		"content": `<style>.zt59nvbfw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3v18m19-18v18M5.25 6h3.5v12h-3.5Zm10 0h3.5v12h-3.5Z");
}
</style><path class="zt59nvbfw"/>`,
		"fallback": "uix-sharp:space-between",
	});
}

export default Component;
