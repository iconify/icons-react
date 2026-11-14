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
		"content": `<style>.g5-1labrp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14.5h8l-1 7H4Zm9.75-4.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm6.5 2.75L21.5 15M7 14.5V9m0 1c0-2 1.5-3.5 3.5-3.5C10.5 8.5 9 10 7 10Zm0 1.5c0-1.75-1.5-3-3.5-3c0 1.75 1.5 3 3.5 3Z");
}
</style><path class="g5-1labrp"/>`,
		"fallback": "uix-sharp:probation-review",
	});
}

export default Component;
