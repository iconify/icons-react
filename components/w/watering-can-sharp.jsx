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
		"content": `<style>.wewmqcjgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5h10v11.75h-10zm2.5 0V4.75h6V9.5m1.5 8.5l5.75-8.25M17.5 8.5L21 11M3.5 13h10");
}
</style><path class="wewmqcjgm"/>`,
		"fallback": "iconoven:watering-can-sharp",
	});
}

export default Component;
