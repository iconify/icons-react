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
		"content": `<style>.i5fcf1tkx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.75v-1h12.5a6 6 0 0 1 6 6v2.5H2.75v-1Zm3 2.5h8.5m2.75 0h1.5M7 13.75v2.75m10-2.75v2.75m-14.25 0h18.5m-9.25 0v4.75");
}
</style><path class="i5fcf1tkx"/>`,
		"fallback": "iconoven:monorail-sharp",
	});
}

export default Component;
