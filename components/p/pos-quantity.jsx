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
		"content": `<style>.dk_bygbon {
  d: path("m3 7l9 4.5L21 7m-9 4.5v2.4M7.5 4.75l9 4.5m0 5.25l-.5 7m4-7l-.5 7m-5-4.75h7m-7 2.5h7");
}

.k5yyb4bor {
  d: path("M11.664 21.332L3 17V7l9-4.5L21 7v4.738");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k5yyb4bor"/><path class="dk_bygbon"/></g>`,
		"fallback": "uix-sharp:pos-quantity",
	});
}

export default Component;
