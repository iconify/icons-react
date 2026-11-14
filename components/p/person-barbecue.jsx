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
		"content": `<style>.x1xdbv7mz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.472 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.276 0 2.462.203 3.497.575M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m11 10.5l-3.25 3.25m5.384-6.091l.707.707a1.75 1.75 0 0 1 0 2.475a1.75 1.75 0 0 1-2.475 0l-.707-.707a1.75 1.75 0 0 1 0-2.475a1.75 1.75 0 0 1 2.475 0");
}
</style><path class="x1xdbv7mz"/>`,
		"fallback": "uix:person-barbecue",
	});
}

export default Component;
