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
		"content": `<style>.ci2xabbgr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h19v8h-19ZM6 8v3.5M9.5 8v3.5M13 8v3.5M16.5 8v3.5M20 8v3.5");
}
</style><path class="ci2xabbgr"/>`,
		"fallback": "uix-sharp:metric-units",
	});
}

export default Component;
