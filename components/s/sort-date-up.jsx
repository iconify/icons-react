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
		"content": `<style>.ofbm7f9wm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 20V4m-3 3l3-3l3 3M12 7h9v10h-9Zm2.5-2v3.5m4-3.5v3.5M12 11h9");
}
</style><path class="ofbm7f9wm"/>`,
		"fallback": "uix-sharp:sort-date-up",
	});
}

export default Component;
