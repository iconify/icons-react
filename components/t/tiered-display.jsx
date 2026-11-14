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
		"content": `<style>.a_fkg-3xv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4v14.5m-9.5.5a9.5 2.5 0 1 0 19 0a9.5 2.5 0 1 0-19 0M5 13a7 2 0 1 0 14 0a7 2 0 1 0-14 0m2.5-5.5a4.5 1.75 0 1 0 9 0a4.5 1.75 0 1 0-9 0m4.5-5h.01");
}
</style><path class="a_fkg-3xv"/>`,
		"fallback": "uix:tiered-display",
	});
}

export default Component;
