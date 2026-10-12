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
		"content": `<style>.j5yk-pbfw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.25c2-4.5 4.75-7 8.25-7s6.5 2.5 10.25 3.5v3.5Zm0-7.75l5-7l3.5 4.75l2.5-3L17.5 12");
}
</style><path class="j5yk-pbfw"/>`,
		"fallback": "iconoven:terrain-sharp",
	});
}

export default Component;
