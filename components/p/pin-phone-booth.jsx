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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yy63izxlp {
  d: path("M5.5 5L7 2.5h10L18.5 5m-13 0h13v16.5h-13Z");
}

.zdv144b4h {
  d: path("M8.5 11.5V10c0-1.25 1.5-2 3.5-2s3.5.75 3.5 2v1.5h-2v-1.25h-3v1.25Zm-3 3h13m-6.5 0v7");
}
</style><g class="ulnmmdpxh"><path class="yy63izxlp"/><path class="zdv144b4h"/></g>`,
		"fallback": "uix-sharp:pin-phone-booth",
	});
}

export default Component;
