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
		"content": `<style>.i776k5nks {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM2.5 21.5C2.5 17 5 14.75 8 14.75s5.5 2.25 5.5 6.75m1-14.75a3.5 4.75 0 1 0 7 0a3.5 4.75 0 1 0-7 0ZM18 11.5V18m0-16v9.5m-3.5-4.75h7");
}
</style><path class="i776k5nks"/>`,
		"fallback": "uix-sharp:tennis-player",
	});
}

export default Component;
