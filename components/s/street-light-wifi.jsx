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
		"content": `<style>.masii1sll {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.5V7a4 4 0 0 1 4-4h2m0 0h8L19 6.5h-5ZM4 21.5h5m8-2h.01m-2.485-2.475a3.5 3.5 0 0 1 4.95 0M12.5 14.138a7 7 0 0 1 9 0");
}
</style><path class="masii1sll"/>`,
		"fallback": "uix-sharp:street-light-wifi",
	});
}

export default Component;
