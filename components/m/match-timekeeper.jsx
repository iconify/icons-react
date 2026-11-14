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
		"content": `<style>.t19a20b_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 13.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0ZM10 3h4m-2 0v3m0 7.5V10m5.25-1.75L19 6.5");
}
</style><path class="t19a20b_r"/>`,
		"fallback": "uix-sharp:match-timekeeper",
	});
}

export default Component;
