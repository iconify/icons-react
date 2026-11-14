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
		"content": `<style>.y0zqnacll {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 14.5a6.5 6.5 0 0 0 13 0Zm6.5 0V3M9 3h6");
}
</style><path class="y0zqnacll"/>`,
		"fallback": "uix-sharp:lawn-edger-manual",
	});
}

export default Component;
