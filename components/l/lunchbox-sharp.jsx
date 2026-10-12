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
		"content": `<style>.w6fhqbbph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.75h18.5v12.5H2.75zm5.5 0v-4.5h7.5v4.5M2.75 13h18.5M12 13v2.75");
}
</style><path class="w6fhqbbph"/>`,
		"fallback": "iconoven:lunchbox-sharp",
	});
}

export default Component;
