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
		"content": `<style>.a1-xsyodt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 4.75a4.5 6-45 1 1 8.5 8.5a4.5 6-45 1 1-8.5-8.5m8.5 8.5l6.5 6.5M4.5 10.5l6-6m-3 9l6-6m2.25-2.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}
</style><path class="a1-xsyodt"/>`,
		"fallback": "uix:tennis-backhand",
	});
}

export default Component;
