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
		"content": `<style>.j9z1gjbfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.75 3.25L5.25 9.5l13.5 6.25m-13.5 4.5h13.5");
}
</style><path class="j9z1gjbfx"/>`,
		"fallback": "iconoven:less-equal-sharp",
	});
}

export default Component;
