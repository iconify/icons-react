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
		"content": `<style>.qsizunb4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 13.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0ZM12 6V2.5m-2.5 0h5M3.5 5l1.25 1.25M12 13.5l2.75-2.75");
}
</style><path class="qsizunb4k"/>`,
		"fallback": "uix-sharp:sports-stopwatch",
	});
}

export default Component;
