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
		"content": `<style>.di6xqjqqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 10H5a1.5 1.5 0 0 0-1.5 1.5V20A1.5 1.5 0 0 0 5 21.5h14a1.5 1.5 0 0 0 1.5-1.5v-8.5A1.5 1.5 0 0 0 19 10h-2.5m-9 0V3.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1V10M9.75 5.5h4.5m-4.5 2.25h3M7.5 16h9");
}
</style><path class="di6xqjqqt"/>`,
		"fallback": "uix-sharp:suggestion-box",
	});
}

export default Component;
