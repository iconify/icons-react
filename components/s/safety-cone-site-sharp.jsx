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
		"content": `<style>.ut-rmw1ff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 9h2.25l.23.71l3.29 10.33l.23.71H6.75l.23-.71l3.29-10.33l.23-.71zm-7.5 11.75h16.5m-11.6-6h6.7M10 5.5h4V9h-4zm-2.25.25L6.25 4.5m10 1.25l1.5-1.25");
}
</style><path class="ut-rmw1ff"/>`,
		"fallback": "iconoven:safety-cone-site-sharp",
	});
}

export default Component;
