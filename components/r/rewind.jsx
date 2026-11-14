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
		"content": `<style>.vlo5upfud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18.241 7.948l-3.716 2.622a1.75 1.75 0 0 0 0 2.86l3.716 2.622A1.75 1.75 0 0 0 21 14.623V9.377a1.75 1.75 0 0 0-2.759-1.429m-9.5 0L5.025 10.57a1.75 1.75 0 0 0 0 2.86l3.716 2.622a1.75 1.75 0 0 0 2.759-1.429V9.377a1.75 1.75 0 0 0-2.759-1.429");
}
</style><path class="vlo5upfud"/>`,
		"fallback": "uix:rewind",
	});
}

export default Component;
