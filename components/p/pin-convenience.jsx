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
		"content": `<style>.mkac5xb6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.238 20.5H3.5l1-13h13l.353 4.586M8 7.5v-2a3 3 0 0 1 6 0v2M19 22l-2.25-2.75a2.75 2.75 0 1 1 4.5 0Z");
}
</style><path class="mkac5xb6q"/>`,
		"fallback": "uix-sharp:pin-convenience",
	});
}

export default Component;
