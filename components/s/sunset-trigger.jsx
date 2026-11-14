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
		"content": `<style>.rwvb0wopo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 16a5 5 0 0 1 10 0m-12 0h10m-3-13.5v5M7.25 5.25L9.5 7.5l2.25-2.25m6.08 10.302l-1.757 2.007a.567.567 0 0 0 .427.941a1.06 1.06 0 0 1 1.045 1.233L17.5 20a.408.408 0 0 0 .717.326l1.738-2.111a.59.59 0 0 0-.455-.965a1.043 1.043 0 0 1-1.026-1.23l.026-.145a.386.386 0 0 0-.67-.323");
}
</style><path class="rwvb0wopo"/>`,
		"fallback": "uix:sunset-trigger",
	});
}

export default Component;
