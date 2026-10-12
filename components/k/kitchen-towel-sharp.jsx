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
		"content": `<style>.nbu577b1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.25h18.5m-15 0h11.5v17H6.25zm0 5.25h11.5m-11.5 6.25h11.5m-11.5 2.5h11.5");
}
</style><path class="nbu577b1p"/>`,
		"fallback": "iconoven:kitchen-towel-sharp",
	});
}

export default Component;
