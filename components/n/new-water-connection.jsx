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
		"content": `<style>.ou26myxrr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5h6a4 4 0 0 1 4 4V12h-4v-1.25a1 1 0 0 0-1-1h-5M3 2.5h5m-2.5 0v3m5 9.5c1 1.25 1.75 2.25 1.75 3a1.75 1.75 0 0 1-3.5 0c0-.75.75-1.75 1.75-3Zm7.5 0v6m-3-3h6");
}
</style><path class="ou26myxrr"/>`,
		"fallback": "uix-sharp:new-water-connection",
	});
}

export default Component;
