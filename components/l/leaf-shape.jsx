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
		"content": `<style>.oya6p_bbx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 19.5c0-8.5 6.5-15 15-15c0 8.5-6.5 15-15 15ZM3 21l10-10");
}
</style><path class="oya6p_bbx"/>`,
		"fallback": "uix-sharp:leaf-shape",
	});
}

export default Component;
