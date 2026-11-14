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
		"content": `<style>.ygy1tukfp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14.5V6a2 2 0 0 1 2-2h9c4 0 7 4 7 8v2.5ZM2.5 20h19M6 17.25h3m6 0h3M3 8.5h14.5");
}
</style><path class="ygy1tukfp"/>`,
		"fallback": "uix:maglev",
	});
}

export default Component;
