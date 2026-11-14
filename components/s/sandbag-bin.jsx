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
		"content": `<style>.z6e4eibzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5h19l-2 8h-15ZM4 8h8v4.5H4Zm8 0h8v4.5h-8ZM8 3.5h8V8H8Z");
}
</style><path class="z6e4eibzw"/>`,
		"fallback": "uix-sharp:sandbag-bin",
	});
}

export default Component;
