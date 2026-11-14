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
		"content": `<style>.ihp3hdvii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5V3h11v4.5M15.2 18H2.5V7.5h19V18h-.7M6.5 18v3h7v-3m4.5-3.5V18m0 3h.01");
}
</style><path class="ihp3hdvii"/>`,
		"fallback": "uix-sharp:printer-error",
	});
}

export default Component;
