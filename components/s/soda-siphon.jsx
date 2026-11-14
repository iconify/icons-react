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
		"content": `<style>.cc5s8lo5u {
  d: path("M10 7v3.5c-3.5 1-5.5 3-5.5 5.75c0 3.5 3 5.25 7.5 5.25s7.5-1.75 7.5-5.25c0-2.75-2-4.75-5.5-5.75V7M8.5 3h7v4h-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.weq1prtgq {
  d: path("M8.5 5h-3l-1 2.5m11-4l4.5 3");
}
</style><g class="ulnmmdpxh"><path class="cc5s8lo5u"/><path class="weq1prtgq"/></g>`,
		"fallback": "uix-sharp:soda-siphon",
	});
}

export default Component;
