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
		"content": `<style>.piygq2bry {
  d: path("M7 10.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm4.5 0L13 9m6 4.5l-3.75 4.75h3l-1 3.75L21 17h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yzu0m9bxr {
  d: path("M10.7 19.5H3v-17h17v10.9");
}
</style><g class="ulnmmdpxh"><path class="yzu0m9bxr"/><path class="piygq2bry"/></g>`,
		"fallback": "uix-sharp:kwh-meter",
	});
}

export default Component;
