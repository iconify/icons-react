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
		"content": `<style>.s8-remb1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.138 19.308L9 18l-6 2.5V6l6-2.5L15 6l6-2.5v8.3M9 3.5V18m6-12v3.25M14.75 18l2 2L21 15.75");
}
</style><path class="s8-remb1k"/>`,
		"fallback": "uix-sharp:map-check",
	});
}

export default Component;
