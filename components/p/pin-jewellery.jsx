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
		"content": `<style>.om3xhjljw {
  d: path("M6 15a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.uji77wb2p {
  d: path("M8.5 5.5L10 3h4l1.5 2.5L12 9Zm0 0h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="om3xhjljw"/><path class="uji77wb2p"/></g>`,
		"fallback": "uix-sharp:pin-jewellery",
	});
}

export default Component;
