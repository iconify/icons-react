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
		"content": `<style>.edzne1hxe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.9 6.6L3.5 19l-1.3 2.252l2.6-.002h14.4l2.6.002L20.5 19L13.1 6.6l-.574-.973L11.5 6.1m.5-3.35v2.9m9.25 4.85l-6 5");
}
</style><path class="edzne1hxe"/>`,
		"fallback": "iconoven:triangle-instrument-sharp",
	});
}

export default Component;
