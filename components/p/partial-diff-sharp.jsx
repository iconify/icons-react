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
		"content": `<style>.kapzdccsm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 5.5l2.1-1.75H12c3.25 0 5.5 2.75 5.5 7.5c0 5.75-2.75 9-6.25 9c-2.75 0-4.75-2-4.75-4.5s2-4.5 4.75-4.5c2.25 0 4.25 1.25 5.75 3.5");
}
</style><path class="kapzdccsm"/>`,
		"fallback": "iconoven:partial-diff-sharp",
	});
}

export default Component;
