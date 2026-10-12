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
		"content": `<style>.uj9u81dzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12h18.5m-16-2.5L2.75 12l2.5 2.5m13.5-5l2.5 2.5l-2.5 2.5M7.5 10.75v2.5m4.5-2.5v2.5m4.5-2.5v2.5m-9-5.5c1.5-4 7.5-4 9 0m-2.25-.5l2.25.5l.5-2.25");
}
</style><path class="uj9u81dzz"/>`,
		"fallback": "iconoven:line-numbers-sharp",
	});
}

export default Component;
