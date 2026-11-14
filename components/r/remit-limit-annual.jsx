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
		"content": `<style>.a6qqe7bpy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 13.5l17-7l-8 14.5l-2.5-5Zm-1-10.75h19M10 16l10.5-9.5");
}
</style><path class="a6qqe7bpy"/>`,
		"fallback": "uix-sharp:remit-limit-annual",
	});
}

export default Component;
