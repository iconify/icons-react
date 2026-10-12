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
		"content": `<style>.fuk7gpbxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5h10v7.5h-10zM7 8.75h3M8.5 12.5V17M5 20.25L8.5 17l3.5 3.25m3.25-11.5h2.25m2 0h1.75");
}
</style><path class="fuk7gpbxd"/>`,
		"fallback": "iconoven:laser-level-sharp",
	});
}

export default Component;
