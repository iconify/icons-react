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
		"content": `<style>.vdou9ygav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10.75V6.5c0-2 2-3.75 5-3.75s5 1.75 5 3.75v4.25ZM7 8.5h10m-14.25 4c0-1 4.15-1.75 9.25-1.75s9.25.75 9.25 1.75s-4.15 1.75-9.25 1.75s-9.25-.75-9.25-1.75m4.75 3.25c-.75 1 .75 1.75 0 2.75s.75 1.75 0 2.75m9-5.5c.75 1-.75 1.75 0 2.75s-.75 1.75 0 2.75");
}
</style><path class="vdou9ygav"/>`,
		"fallback": "iconoven:rabbi-hat",
	});
}

export default Component;
