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
		"content": `<style>.au1buibhk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5H19m-16.5 6H19m-1.5-3a1.5 3 0 1 0 3 0a1.5 3 0 1 0-3 0M5 9.5L6.5 15L8 9.5m3 0l1.5 6.5L14 9.5m4 5.5v6m-2.5-4.5l5 3m-5 0l5-3");
}
</style><path class="au1buibhk"/>`,
		"fallback": "uix:pipe-frozen",
	});
}

export default Component;
