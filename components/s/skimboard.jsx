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
		"content": `<style>.wd7gscqqc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 12.5c0-3 8-8 14-8c2.5 0 3 2 1.5 3.5c-3 2.5-12.5 6.5-14.5 6.5c-.5 0-1-1-1-2Zm-1.5 5h19M6 20.5h12");
}
</style><path class="wd7gscqqc"/>`,
		"fallback": "uix-sharp:skimboard",
	});
}

export default Component;
