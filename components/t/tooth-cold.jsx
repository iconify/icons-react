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
		"content": `<style>.ebr8uxg6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.1 14.689l.65-2.439c.5-1.75 1.75-3 1.75-5.5c0-2.25-1-4.25-3.5-4.25c-1.5 0-2.25 1-3.75 1S8 2.5 6.5 2.5C4 2.5 3 4.5 3 6.75c0 2.5 1.25 3.75 1.75 5.5l1 3.75c.25 1.25 1.75 1.25 2 0l.75-2.5c.25-1 3.25-1 3.5 0l.75 2.5c.1.501.401.801.742.9m5.258-.9v5.5m-2.5-4.25l5 3m-5 0l5-3");
}
</style><path class="ebr8uxg6x"/>`,
		"fallback": "uix:tooth-cold",
	});
}

export default Component;
