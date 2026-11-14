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
		"content": `<style>.obl15bknn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7.5h9v9h-9ZM12 12h.01M4.5 7.5L3 9.75L4.5 12L3 14.25l1.5 2.25m15-9L21 9.75L19.5 12l1.5 2.25l-1.5 2.25");
}
</style><path class="obl15bknn"/>`,
		"fallback": "uix-sharp:vibration-sensor",
	});
}

export default Component;
