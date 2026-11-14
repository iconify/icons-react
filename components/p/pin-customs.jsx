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
		"content": `<style>.a9xb4qbsk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 5.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM4 12h16v4.5H4Zm6.5-4.25V12m3-4.25V12M4 20h16");
}
</style><path class="a9xb4qbsk"/>`,
		"fallback": "uix-sharp:pin-customs",
	});
}

export default Component;
