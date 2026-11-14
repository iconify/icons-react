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
		"content": `<style>.hdx_qs_nc {
  d: path("M5 3h14v18l-3.5-2l-3.5 2l-3.5-2L5 21Zm3.5 4h7");
}

.qzj5_wbjl {
  d: path("m9 13l2 2l4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hdx_qs_nc"/><path class="qzj5_wbjl"/></g>`,
		"fallback": "uix-sharp:receipt-check",
	});
}

export default Component;
