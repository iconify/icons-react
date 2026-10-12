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
		"content": `<style>.xyzbwk3nu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 6.5h9m-9 5.5h6.5m-6.5 5.5h4m9.5-12.75v14.5m-3.5-3.5l3.5 3.5l3.5-3.5");
}
</style><path class="xyzbwk3nu"/>`,
		"fallback": "iconoven:sort-descending-sharp",
	});
}

export default Component;
