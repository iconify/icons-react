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
		"content": `<style>.iu2-j6_ix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 4h4.75A2.625 2.625 0 0 1 12.5 6.625v12.25A2.625 2.625 0 0 1 9.875 21.5h-4.75A2.625 2.625 0 0 1 2.5 18.875V6.625A2.625 2.625 0 0 1 5.125 4M7.5 4v17.5M18.5 3v17m-3-3l3 3l3-3");
}
</style><path class="iu2-j6_ix"/>`,
		"fallback": "uix:lift-down",
	});
}

export default Component;
