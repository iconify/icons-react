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
		"content": `<style>.ba-ozjuhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9h7v12H4Zm1.5-3.5h4V9h-4Zm8 6.5H20v9h-6.5Zm3.25 0V9h2.75");
}
</style><path class="ba-ozjuhv"/>`,
		"fallback": "uix-sharp:toiletries",
	});
}

export default Component;
