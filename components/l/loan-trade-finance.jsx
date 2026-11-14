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
		"content": `<style>.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.u29og_bjz {
  d: path("M11.342 16.5H5L2.5 11h19l-.662 1.457M4.5 3H9v8H4.5ZM11 6.5h9V11h-9ZM4.5 6H9m5 .5V11m3-4.5V11M2.5 20q2.25-1.5 4.5 0t4.5 0m2.5-2a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u29og_bjz"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:loan-trade-finance",
	});
}

export default Component;
