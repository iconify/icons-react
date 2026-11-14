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
		"content": `<style>.jxwreacjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19c0 4-4.5 6-9.5 6s-9.5-2-9.5-6m9.5 6v8m-4 0h8m-.5-14a3 3 0 0 1 6 0");
}
</style><path class="jxwreacjd"/>`,
		"fallback": "uix:margarita",
	});
}

export default Component;
