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
		"content": `<style>.lrn5-z8pv {
  d: path("M7.5 12.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM13 11h4m-4 3h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ur1t5-hgg {
  d: path("M3 8h18v3a1.5 1.5 0 0 0 0 3v3H3v-3a1.5 1.5 0 0 0 0-3Z");
}
</style><g class="ulnmmdpxh"><path class="ur1t5-hgg"/><path class="lrn5-z8pv"/></g>`,
		"fallback": "uix-sharp:tour-ticket",
	});
}

export default Component;
