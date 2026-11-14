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
		"content": `<style>.limgurblw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3c0 10 4 14.5 10 14.5m0 0h4m0-4h3v8h-3Z");
}
</style><path class="limgurblw"/>`,
		"fallback": "uix-sharp:tow-rope-handle",
	});
}

export default Component;
