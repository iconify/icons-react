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
		"content": `<style>.bn-qgm9xi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.192 19.615L12 19.5L9.5 21l-2.25-1.5L5 21V2.5h14v9.7m-4.16 8.574L14.5 21l-.336-.202M8.5 7h7m-7 4h7m-7 4h4m5.5 0v6m-3-3h6");
}
</style><path class="bn-qgm9xi"/>`,
		"fallback": "uix-sharp:invoice-line-add",
	});
}

export default Component;
