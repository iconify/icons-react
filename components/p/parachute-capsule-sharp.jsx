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
		"content": `<style>.opu5rez0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5a9 6.75 0 0 1 18 0L18.75 8L16.5 9.5L14.25 8L12 9.5L9.75 8L7.5 9.5L5.25 8zm.75 1l5.75 5m10.75-5l-5.75 5M12 10.25v5.25m-.75.75h2.25l.34.67l1.82 3.66l.34.67H8l.34-.67l1.82-3.66l.34-.67z");
}
</style><path class="opu5rez0y"/>`,
		"fallback": "iconoven:parachute-capsule-sharp",
	});
}

export default Component;
