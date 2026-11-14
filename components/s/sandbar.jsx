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
		"content": `<style>.x497atcwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6Q5 4.5 7.25 6T12 6t4.75 0t4.75 0m-19 4.5Q5 9 7.25 10.5t4.75 0t4.75 0t4.75 0M2.5 19c4.5-5.5 14.5-5.5 19 0Z");
}
</style><path class="x497atcwo"/>`,
		"fallback": "uix-sharp:sandbar",
	});
}

export default Component;
