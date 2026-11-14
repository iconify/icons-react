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
		"content": `<style>.s7glgsbqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h13V21l-2.25-1.5L14 21l-2-1.5l-2 1.5l-2.25-1.5L5.5 21Zm3 4.5h7m-7 9H13M2.5 11.5h19");
}
</style><path class="s7glgsbqs"/>`,
		"fallback": "uix-sharp:invoice-scan",
	});
}

export default Component;
