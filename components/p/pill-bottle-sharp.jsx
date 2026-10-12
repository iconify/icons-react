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
		"content": `<style>.dshp15bcs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 9h12.5v12.25H5.75zm-1-6.25h14.5V6.5H4.75zm7.25 9.5v5.5M9.25 15h5.5");
}
</style><path class="dshp15bcs"/>`,
		"fallback": "iconoven:pill-bottle-sharp",
	});
}

export default Component;
