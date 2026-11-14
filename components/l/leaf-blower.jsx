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
		"content": `<style>.loe80hwrm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h6v7.5h-6Zm6 2l5.5.75v2l-5.5.75ZM13 20.5c0-4 3-6.5 7.5-6.5c0 4-3 6.5-7.5 6.5Zm3.75-14.25h4.75m-4.75 3H20");
}
</style><path class="loe80hwrm"/>`,
		"fallback": "uix-sharp:leaf-blower",
	});
}

export default Component;
