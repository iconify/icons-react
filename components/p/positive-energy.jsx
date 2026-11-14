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
		"content": `<style>.vbbpmubqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.867 15.202L16.5 10.5H10l1.5-8L3 13h6.5L8 21.5l4.194-5.428M18 15v6m-3-3h6");
}
</style><path class="vbbpmubqd"/>`,
		"fallback": "uix-sharp:positive-energy",
	});
}

export default Component;
