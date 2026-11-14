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
		"content": `<style>.koytlfb1l {
  d: path("M5.75 4.75h9v12.5h-9Zm4.5 0v12.5m-4.5-8.5h9m-9 4.25h9m3-6.5h.01M16.75 10h2M6.5 19.5H14");
}

.oeucrxbku {
  d: path("M3.5 2.5h17v19h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oeucrxbku"/><path class="koytlfb1l"/></g>`,
		"fallback": "uix-sharp:vending-kiosk",
	});
}

export default Component;
