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
		"content": `<style>.l98merbdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 20.5l-7.5-15h15Zm-7.5-15c0-3.75 15-3.75 15 0m-9.5 4h.01M12 14h.01");
}
</style><path class="l98merbdp"/>`,
		"fallback": "uix-sharp:pizzeria",
	});
}

export default Component;
