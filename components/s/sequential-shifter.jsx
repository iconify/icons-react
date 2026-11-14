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
		"content": `<style>.cfgvyzjqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 3V18m-3.5 3.5L6 18h4l1.5 3.5m2.5-15L16.5 4L19 6.5M16.5 4v16M14 17.5l2.5 2.5l2.5-2.5");
}
</style><path class="cfgvyzjqd"/>`,
		"fallback": "uix-sharp:sequential-shifter",
	});
}

export default Component;
