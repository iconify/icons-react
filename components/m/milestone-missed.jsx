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
		"content": `<style>.gcz2ibbzk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5v19m0-18H18l-3 4.25L18 12h-2.096m-.8 0H3.5m12 3.5l5 5m0-5l-5 5");
}
</style><path class="gcz2ibbzk"/>`,
		"fallback": "uix-sharp:milestone-missed",
	});
}

export default Component;
