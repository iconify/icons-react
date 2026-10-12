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
		"content": `<style>.peq7-fbtn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 8V5.75a2.5 2.5 0 0 1 2.5-2.5H8m8 0h2.25a2.5 2.5 0 0 1 2.5 2.5V8m0 8v2.25a2.5 2.5 0 0 1-2.5 2.5H16m-8 0H5.75a2.5 2.5 0 0 1-2.5-2.5V16M8 8h8m-4 0v8.25");
}
</style><path class="peq7-fbtn"/>`,
		"fallback": "iconoven:ocr-scan",
	});
}

export default Component;
