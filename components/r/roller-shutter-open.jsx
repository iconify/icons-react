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
		"content": `<style>.fzw6bebri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 2.5h13.5a2.75 2.75 0 0 1 2.75 2.75A2.75 2.75 0 0 1 18.75 8H5.25A2.75 2.75 0 0 1 2.5 5.25A2.75 2.75 0 0 1 5.25 2.5M4.5 8v13.5M19.5 8v13.5m-17 0h19m-17-11h15M7 5.25h10");
}
</style><path class="fzw6bebri"/>`,
		"fallback": "uix:roller-shutter-open",
	});
}

export default Component;
