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
		"content": `<style>.gvucakbvj {
  d: path("M5.25 14.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm9.25-2.75h4M15 16.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xfjlu1b9r {
  d: path("M2.5 8h19v12.5h-19ZM7 8V5.5A1.5 1.5 0 0 1 8.5 4h7A1.5 1.5 0 0 1 17 5.5V8");
}
</style><g class="ulnmmdpxh"><path class="xfjlu1b9r"/><path class="gvucakbvj"/></g>`,
		"fallback": "uix-sharp:radio-portable",
	});
}

export default Component;
