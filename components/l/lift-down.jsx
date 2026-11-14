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
		"content": `<style>.ce_112b2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h10v17.5h-10Zm5 0v17.5M18.5 3v17m-3-3l3 3l3-3");
}
</style><path class="ce_112b2j"/>`,
		"fallback": "uix-sharp:lift-down",
	});
}

export default Component;
