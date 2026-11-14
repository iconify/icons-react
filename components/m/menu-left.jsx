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
		"content": `<style>.fwl3zfbdi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6.5h11.5M9 12h11.5M9 17.5h11.5M6 9l-3 3l3 3");
}
</style><path class="fwl3zfbdi"/>`,
		"fallback": "uix-sharp:menu-left",
	});
}

export default Component;
