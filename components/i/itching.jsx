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
		"content": `<style>.qjjuszbyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.25L12 10c1 0 1.75-.25 2.5-.75L17.25 8c.75-.25 1.5.5 1 1.25l-.5.5H20c.9 0 1.5.65 1.5 1.5V14c0 1-.75 1.75-1.75 1.75H13.5c-.75 0-1.25-.25-2-.5l-9 .5m15.25-3h3.75M4.5 3l2 3.5M8 3l2 3.5M11.5 3l2 3.5");
}
</style><path class="qjjuszbyj"/>`,
		"fallback": "uix-sharp:itching",
	});
}

export default Component;
