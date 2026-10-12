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
		"content": `<style>.pyns-5bxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.25h18.5m-17 2.5h15.5L18.5 19.6a1.85 1.85 0 0 1-1.84 1.65H7.34A1.85 1.85 0 0 1 5.5 19.6Zm4.75 3v6m3-6v6m3-6v6");
}
</style><path class="pyns-5bxx"/>`,
		"fallback": "iconoven:laundry-basket",
	});
}

export default Component;
