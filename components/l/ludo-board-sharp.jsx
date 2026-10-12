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
		"content": `<style>.ocos3pbek {
  d: path("M3 3h18v18H3z");
}

.un8pc8bkn {
  d: path("M5.75 6.75v-1h4.5v4.5h-4.5v-1Zm8 0v-1h4.5v4.5h-4.5v-1Zm-8 8v-1h4.5v4.5h-4.5v-1Zm8.5-.5h4v4h-4zM12 10.6l1.4 1.4l-1.4 1.4l-1.4-1.4Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ocos3pbek"/><path class="un8pc8bkn"/></g>`,
		"fallback": "iconoven:ludo-board-sharp",
	});
}

export default Component;
