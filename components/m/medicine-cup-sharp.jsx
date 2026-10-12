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
		"content": `<style>.hoyyy-psr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 6.75h14.75l-.28 1.73l-1.69 10.54l-.28 1.73H6l-.28-1.73L4.03 8.48l-.28-1.73zm2 4H11M7.75 14h2.5m-2 3.25h3");
}
</style><path class="hoyyy-psr"/>`,
		"fallback": "iconoven:medicine-cup-sharp",
	});
}

export default Component;
