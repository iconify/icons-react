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
		"content": `<style>.uwo04zrgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 6.5h13A3.5 3.5 0 0 1 22 10v4a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 14v-4a3.5 3.5 0 0 1 3.5-3.5ZM6 12h5.5m3.5-1.75l3.5 3.5m0-3.5l-3.5 3.5");
}
</style><path class="uwo04zrgg"/>`,
		"fallback": "uix-sharp:tag-chip-close",
	});
}

export default Component;
