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
		"content": `<style>.lv6vspbia {
  d: path("M13.6 19.5H4v-17h12v7.2");
}

.olz4_v9jp {
  d: path("M6.75 5.25h6.5v3.5h-6.5Zm1.25 7h.01m3.99 0h.01m-4.01 4h.01m3.99 0h.01M18 21l-2.25-3.25a3.25 3.25 0 1 1 4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lv6vspbia"/><path class="olz4_v9jp"/></g>`,
		"fallback": "uix-sharp:pin-accountant",
	});
}

export default Component;
