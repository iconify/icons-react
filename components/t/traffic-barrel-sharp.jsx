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
		"content": `<style>.k5q_ibj4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 3.75h8.5l.09 1l1.07 12.5l.09 1H6l.09-1l1.07-12.5l.09-1zM6.8 9h10.4M6.4 13.5h11.2M3.75 18.25h16.5v3H3.75z");
}
</style><path class="k5q_ibj4d"/>`,
		"fallback": "iconoven:traffic-barrel-sharp",
	});
}

export default Component;
