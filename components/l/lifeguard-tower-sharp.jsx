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
		"content": `<style>.c1no7d_jf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.88 7.59l6.49-4.18L12 3l.63.41l6.49 4.18l.63.41H4.25zM6.75 8h10.5v5.5H6.75zm0 0h10.5M8 13.5l-2.75 7.75M16 13.5l2.75 7.75");
}
</style><path class="c1no7d_jf"/>`,
		"fallback": "iconoven:lifeguard-tower-sharp",
	});
}

export default Component;
