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
		"content": `<style>.aybv3fbhe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 15.25v-3L4.5 10A1.75 1.75 0 0 1 7 7.5V5.75a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1 5 0v9.5m-11 0h12l1.5 5.5h-15Zm6-9.5V9");
}
</style><path class="aybv3fbhe"/>`,
		"fallback": "uix-sharp:racing-gloves",
	});
}

export default Component;
