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
		"content": `<style>.ed-o4js-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7h12.25v3.5H2.5Zm1 3.5V20A1.5 1.5 0 0 0 5 21.5h7.25a1.5 1.5 0 0 0 1.5-1.5v-9.5m-5-3.5v14.5m11-15.5l2 2.25v6.25h-4V8.25Zm0 0c0-2.5-2.25-3.5-4.75-3.5c-3 0-6.25 1-6.25 4.5");
}
</style><path class="ed-o4js-u"/>`,
		"fallback": "uix-sharp:status-awaiting-pickup",
	});
}

export default Component;
