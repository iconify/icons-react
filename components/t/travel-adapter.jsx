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
		"content": `<style>.km8lmlbdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.875 8h4.25a4.375 4.375 0 0 1 4.375 4.375v.25A4.375 4.375 0 0 1 14.125 17h-4.25A4.375 4.375 0 0 1 5.5 12.625v-.25A4.375 4.375 0 0 1 9.875 8M9.5 8V4m5 4V4M12 17v4");
}
</style><path class="km8lmlbdz"/>`,
		"fallback": "uix:travel-adapter",
	});
}

export default Component;
