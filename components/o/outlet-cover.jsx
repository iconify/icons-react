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
		"content": `<style>.g88u-mb_j {
  d: path("M5.5 2.5h13v19h-13Zm5 3.5v3m3-3v3");
}

.hw2p_8bff {
  d: path("M8.5 12.5h7v6h-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g88u-mb_j"/><path class="hw2p_8bff"/></g>`,
		"fallback": "uix-sharp:outlet-cover",
	});
}

export default Component;
