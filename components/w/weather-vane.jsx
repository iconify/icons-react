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
		"content": `<style>.nzu46sblf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6h17.5m-3.25-3.25L20.5 6l-3.25 3.25M3 2.75L6.25 6L3 9.25M12 6v15.5M7 15h10");
}
</style><path class="nzu46sblf"/>`,
		"fallback": "uix-sharp:weather-vane",
	});
}

export default Component;
