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
		"content": `<style>.x3-z5ab4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11.5h18V19H3ZM5.5 19v2.5m13-2.5v2.5M6.5 8.75V3.5h4l1 2h3a3.25 3.25 0 0 1 3.25 3.25ZM12 11.5V19");
}
</style><path class="x3-z5ab4o"/>`,
		"fallback": "uix-sharp:shoe-cabinet",
	});
}

export default Component;
