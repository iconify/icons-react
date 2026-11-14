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
		"content": `<style>.nbnjc8b2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5h19v13h-19Zm4 3.5h.01M10 9h.01m3.74 0h.01m3.74 0h.01M6.5 12.25h.01m3.49 0h.01m3.74 0h.01m3.74 0h.01M7.5 15.5h9");
}
</style><path class="nbnjc8b2s"/>`,
		"fallback": "uix-sharp:keyboard-compact",
	});
}

export default Component;
