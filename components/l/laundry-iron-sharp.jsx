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
		"content": `<style>.xzv72_amz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 19.25h18.5v-7.5H10.5c-3.75 0-6.75 3-7.75 7.5Zm6.5-7.5l1.25-4h8.25v4M7 16h11.5");
}
</style><path class="xzv72_amz"/>`,
		"fallback": "iconoven:laundry-iron-sharp",
	});
}

export default Component;
