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
		"content": `<style>.abesygrbz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h7v4H7Zm1.5 4h4V10h-4ZM4 10h13a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1Zm13.5-7h.01m2.99 2h.01M17.5 7h.01");
}
</style><path class="abesygrbz"/>`,
		"fallback": "uix-sharp:pin-perfume",
	});
}

export default Component;
