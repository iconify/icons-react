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
		"content": `<style>.vfqkunl5c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12.75H5.5v7.5H2.75zm5.25-5h2.75v5H8zm5.25 0H16v3.5h-2.75zm5.25 3.5h2.75v9H18.5z");
}
</style><path class="vfqkunl5c"/>`,
		"fallback": "iconoven:waterfall-chart-sharp",
	});
}

export default Component;
