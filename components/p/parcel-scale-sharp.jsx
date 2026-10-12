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
		"content": `<style>.it51898yf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 4h10.5v8.25H6.75zM12 4v3m-7.25 7.5h14.5m-7.25 0v2.25m-9.25 0h18.5v4.5H2.75zM15.5 19H18");
}
</style><path class="it51898yf"/>`,
		"fallback": "iconoven:parcel-scale-sharp",
	});
}

export default Component;
