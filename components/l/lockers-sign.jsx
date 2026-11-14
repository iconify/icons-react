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
		"content": `<style>.oeirtxgkm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h17v19h-17Zm8.5 0v19M6.25 5.25h3M6.25 8h3m5.5-2.75h3m-3 2.75h3m-8.5 4.5V15m5.5-2.5V15");
}
</style><path class="oeirtxgkm"/>`,
		"fallback": "uix-sharp:lockers-sign",
	});
}

export default Component;
