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
		"content": `<style>.qkduubcix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v10m-7.75 0h15.5v3H4.25zm1.75 3v5.5m4-5.5v5.5m4-5.5v5.5m4-5.5v5.5");
}
</style><path class="qkduubcix"/>`,
		"fallback": "iconoven:rake-sharp",
	});
}

export default Component;
