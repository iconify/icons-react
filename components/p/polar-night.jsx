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
		"content": `<style>.pn2zcwb5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 4a7 7 0 1 0 5 10a6 6 0 0 1-5-10M2.5 21h19M19 3v4m-2-2h4M4 5h.01");
}
</style><path class="pn2zcwb5b"/>`,
		"fallback": "uix:polar-night",
	});
}

export default Component;
