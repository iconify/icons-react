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
		"content": `<style>.r0_ycqabv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 16.473V19.5l-5-4.5h-4V9h1.6m5.299-2.609L12.5 4.5v4.073M3.5 3.5l17 17");
}
</style><path class="r0_ycqabv"/>`,
		"fallback": "uix-sharp:volume-off",
	});
}

export default Component;
