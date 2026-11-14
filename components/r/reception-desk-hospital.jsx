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
		"content": `<style>.tfmrwvbzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12.5a5.5 5.5 0 0 1 11 0ZM12 7V5m-1.5 0h3M5.125 15.5h13.75a2.625 2.625 0 0 1 2.625 2.625v.25A2.625 2.625 0 0 1 18.875 21H5.125A2.625 2.625 0 0 1 2.5 18.375v-.25A2.625 2.625 0 0 1 5.125 15.5");
}
</style><path class="tfmrwvbzn"/>`,
		"fallback": "uix:reception-desk-hospital",
	});
}

export default Component;
