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
		"content": `<style>.bef8iacnx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19v2.5a4 4 0 0 1-4 4h-11a4 4 0 0 1-4-4Zm3.25-5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M13 11l2.5-3.5L18 11M6 17.5L5 20m13-2.5l1 2.5");
}
</style><path class="bef8iacnx"/>`,
		"fallback": "uix:public-baths",
	});
}

export default Component;
