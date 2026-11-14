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
		"content": `<style>.k7_ao9bze {
  d: path("M4 4.5h17.5v5H4Zm-1.5 5h17v5h-17Zm1 5h18v5h-18Z");
}

.r0pdnbszv {
  d: path("m11 4.5l2.5 5l-2 5l2 5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k7_ao9bze"/><path class="r0pdnbszv"/></g>`,
		"fallback": "uix-sharp:shale-layer",
	});
}

export default Component;
