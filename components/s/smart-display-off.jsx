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
		"content": `<style>.mo27nmqql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.9 3h13.6v13.6M14.1 18H3.5V7.4M12 18v3m-3.5 0h7M3.5 3.5l17 17");
}
</style><path class="mo27nmqql"/>`,
		"fallback": "uix-sharp:smart-display-off",
	});
}

export default Component;
