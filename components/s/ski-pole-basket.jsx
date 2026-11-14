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
		"content": `<style>.xb25ebb9c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 2.5h3V7h-3ZM12 7v13.5m-5-5a5 2 0 1 0 10 0a5 2 0 1 0-10 0Zm-4 5h18");
}
</style><path class="xb25ebb9c"/>`,
		"fallback": "uix-sharp:ski-pole-basket",
	});
}

export default Component;
