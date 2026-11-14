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
		"content": `<style>.vr87f0b5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5.5h3v4h-3Zm12 0h3v4h-3ZM6 9.5V14a6 6 0 0 0 12 0V9.5m-12-7v3m12-3v3");
}
</style><path class="vr87f0b5s"/>`,
		"fallback": "uix-sharp:patch-cable",
	});
}

export default Component;
