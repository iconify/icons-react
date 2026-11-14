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
		"content": `<style>.oeiepacuo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.5 3.25l3-1.25l3.5 8.25l-3 1.25Zm7 17.75c4-3 4-8.5.25-11M7 15.5h7.5M5 21h14");
}
</style><path class="oeiepacuo"/>`,
		"fallback": "uix-sharp:microscope",
	});
}

export default Component;
