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
		"content": `<style>.biifgnb1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 15.5h14v3H5Zm-1.5 6h17m-12-9L7 10m5 2.5v-3m3.5 3L17 10M7 4.5h10m-8-2l-2 2l2 2m6-4l2 2l-2 2");
}
</style><path class="biifgnb1g"/>`,
		"fallback": "uix-sharp:sprinkler-oscillating",
	});
}

export default Component;
