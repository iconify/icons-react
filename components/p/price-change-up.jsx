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
		"content": `<style>.ael1bgdwl {
  d: path("M8.5 4.5h11v15h-11l-5-7.5ZM8.25 12h.01M14 15V9");
}

.ouy71-h4b {
  d: path("M11.75 11L14 8.75L16.25 11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ael1bgdwl"/><path class="ouy71-h4b"/></g>`,
		"fallback": "uix-sharp:price-change-up",
	});
}

export default Component;
