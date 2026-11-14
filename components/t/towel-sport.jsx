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
		"content": `<style>.daxjslm9o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19M6 3v15h12V3M6 14.5h12M8.5 18v3m3.5-3v3m3.5-3v3");
}
</style><path class="daxjslm9o"/>`,
		"fallback": "uix:towel-sport",
	});
}

export default Component;
