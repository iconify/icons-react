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
		"content": `<style>.lga5qfbbv {
  d: path("M9.5 9h5l-3 6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yc8jn8g7v {
  d: path("M3 6h18v3.5a2.5 2.5 0 0 0 0 5V18H3v-3.5a2.5 2.5 0 0 0 0-5Z");
}
</style><g class="ulnmmdpxh"><path class="yc8jn8g7v"/><path class="lga5qfbbv"/></g>`,
		"fallback": "uix-sharp:lottery-kiosk",
	});
}

export default Component;
