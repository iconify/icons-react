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
		"content": `<style>.tkacnr38n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h19v-11Zm1.5-9l8-8m-8.5 1a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="tkacnr38n"/>`,
		"fallback": "uix-sharp:terrain-slope-percent",
	});
}

export default Component;
