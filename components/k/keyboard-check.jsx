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
		"content": `<style>.ko6u8tbst {
  d: path("M9.5 14.25L11.25 16l3.25-3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wdsipzehx {
  d: path("M2 6h20v12H2Zm4 3.25h.01m3.99 0h.01m3.99 0h.01m3.99 0h.01");
}
</style><g class="ulnmmdpxh"><path class="wdsipzehx"/><path class="ko6u8tbst"/></g>`,
		"fallback": "uix-sharp:keyboard-check",
	});
}

export default Component;
