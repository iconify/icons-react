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
		"content": `<style>.mq96khafr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14.5h18v7H3ZM5 8h14v6.5H5Zm8 0V3l1.75 1.5L16.5 3v5M7 14.5v7M9.75 8v6.5");
}
</style><path class="mq96khafr"/>`,
		"fallback": "uix-sharp:literature-review",
	});
}

export default Component;
