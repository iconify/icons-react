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
		"content": `<style>.wmk87ezkl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8.5h13v4h-13Zm1.5 4h13v4H7Zm-2.5 4h13v4h-13ZM2.5 6V3.5h19V6");
}
</style><path class="wmk87ezkl"/>`,
		"fallback": "uix-sharp:salary-cap",
	});
}

export default Component;
