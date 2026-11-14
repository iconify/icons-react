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
		"content": `<style>.sy_ivyk9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 7.5l9-5l9 5Zm.5 4.5h17v6h-17ZM5 7.5V12m14-4.5V12M6 20a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm9 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="sy_ivyk9l"/>`,
		"fallback": "uix-sharp:mall-kiosk",
	});
}

export default Component;
