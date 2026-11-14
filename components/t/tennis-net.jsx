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
		"content": `<style>.qd1rifbux {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20V4m18 16V4M3 6.5q9 3 18 0M3 16q9 1.5 18 0M9.5 7.75v9m5-9v9");
}
</style><path class="qd1rifbux"/>`,
		"fallback": "uix-sharp:tennis-net",
	});
}

export default Component;
