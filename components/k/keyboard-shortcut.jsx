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
		"content": `<style>.axwy52_vr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.6 15.5H2.5V4h17v8.6M6 7.75h.01m3.74 0h.01m3.74 0h.01M7 11.5h7.5m0 7h7m-3-3l3 3l-3 3");
}
</style><path class="axwy52_vr"/>`,
		"fallback": "uix-sharp:keyboard-shortcut",
	});
}

export default Component;
