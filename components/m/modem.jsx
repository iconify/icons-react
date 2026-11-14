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
		"content": `<style>.t-_e__bas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19v8h-19Zm4 4h.01M10 16h.01m3.49 0h.01m2.99 0h1M9.879 7.879a3 3 0 0 1 4.242 0M7.757 5.757a6 6 0 0 1 8.486 0");
}
</style><path class="t-_e__bas"/>`,
		"fallback": "uix-sharp:modem",
	});
}

export default Component;
