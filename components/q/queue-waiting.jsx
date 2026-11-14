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
		"content": `<style>.onr-syb7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5H7V20H2.5Zm7.25 0h4.5V20h-4.5Zm7.25 0h4.5V20H17Zm2.25-11v7M16.75 9l2.5 2.5l2.5-2.5");
}
</style><path class="onr-syb7b"/>`,
		"fallback": "uix-sharp:queue-waiting",
	});
}

export default Component;
