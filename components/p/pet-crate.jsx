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
		"content": `<style>.h4n-0g25d {
  d: path("M3 20.5V12c0-4 3-5.5 9-5.5S21 8 21 12v8.5Zm6-14V4h6v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xqfft8l8m {
  d: path("M5.75 10.5H14V18H5.75Zm2.75 0V18m2.75-7.5V18");
}
</style><g class="ulnmmdpxh"><path class="h4n-0g25d"/><path class="xqfft8l8m"/></g>`,
		"fallback": "uix-sharp:pet-crate",
	});
}

export default Component;
