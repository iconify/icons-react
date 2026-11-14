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
		"content": `<style>.li6ew3pbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 12l1.25-1C5.5 7 8.5 5.5 12 5.5S18.5 7 19.75 11L21 12l-1.25 1c-1.25 4-4.25 5.5-7.75 5.5S5.5 17 4.25 13Zm5.5-2v4m-2-2h4m3 0h4");
}
</style><path class="li6ew3pbc"/>`,
		"fallback": "uix:lemon-battery",
	});
}

export default Component;
