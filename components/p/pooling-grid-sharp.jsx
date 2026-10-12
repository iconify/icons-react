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
		"content": `<style>.qifws2bde {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7h10v10h-10zm5 0v10m-5-5h10m1.5-2L16 12l-1.75 2m3.5-4h3.5v4h-3.5z");
}
</style><path class="qifws2bde"/>`,
		"fallback": "iconoven:pooling-grid-sharp",
	});
}

export default Component;
