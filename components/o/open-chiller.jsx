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
		"content": `<style>.gcyp9ccho {
  d: path("M3.5 21.5V4h17v17.5m-17 0h17M3.5 7h17m-17 5.5h17M3.5 17h17");
}

.qam07-gzr {
  d: path("M6 9.5h2.5v3H6Zm4.75 0h2.5v3h-2.5Zm4.75 0H18v3h-2.5ZM6 14.25h2.5V17H6Zm7 0h4.5V17H13Zm-7.5 5h2m3.5 0h2m3.5 0h2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gcyp9ccho"/><path class="qam07-gzr"/></g>`,
		"fallback": "uix-sharp:open-chiller",
	});
}

export default Component;
