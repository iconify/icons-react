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
		"content": `<style>.otfc6zbbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5L8 9h8l5.5 3.5M8 4.5h8V9H8Zm-3.5 9.25V20h15v-6.25M12 4.5V9");
}
</style><path class="otfc6zbbc"/>`,
		"fallback": "uix-sharp:roof-clerestory-monitor",
	});
}

export default Component;
