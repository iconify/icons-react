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
		"content": `<style>.ijbz4qbyd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.55 3.02L3.45 9.73l-.7.27l.67.34l6.16 3.07l.67.34l.34.67l3.07 6.16l.34.67l.27-.7l6.71-17.1l.27-.7zm-10.3 10.73l5-5m-12.5 12.5c1.75 0 3.5-.75 4-2.25c.4-1.25-.9-2.1-1.9-1.2c-.95.9.05 2.5 1.75 2.6l1.578.143L9.5 19.75");
}
</style><path class="ijbz4qbyd"/>`,
		"fallback": "iconoven:paper-plane-toy-sharp",
	});
}

export default Component;
