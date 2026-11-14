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
		"content": `<style>.fgcktzb1y {
  d: path("M3.5 4h5v9h-5Z");
}

.u4a6hrbqj {
  d: path("M2 11a4 4 0 0 0 8 0m-4 4v4m7-11h8m-8 4h8m-8 4h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fgcktzb1y"/><path class="u4a6hrbqj"/></g>`,
		"fallback": "uix-sharp:speech-to-text",
	});
}

export default Component;
