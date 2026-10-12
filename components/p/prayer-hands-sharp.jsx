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
		"content": `<style>.nb1x3m3gr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 18V3H7v7.25l-2.25 1.5v5.125L6.25 18Zm3 0V3H17v7.25l2.25 1.5v5.125L17.75 18Zm-7.25 3h11.5");
}
</style><path class="nb1x3m3gr"/>`,
		"fallback": "iconoven:prayer-hands-sharp",
	});
}

export default Component;
