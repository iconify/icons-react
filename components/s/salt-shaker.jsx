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
		"content": `<style>.j3g512b-i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9h10l-.5 11h-9Zm1 0c0-4 1.5-5.5 4-5.5S16 5 16 9m-5.5-2.5h.01m2.99 0h.01");
}
</style><path class="j3g512b-i"/>`,
		"fallback": "uix:salt-shaker",
	});
}

export default Component;
