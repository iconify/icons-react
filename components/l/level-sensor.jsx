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
		"content": `<style>.be2_8-can {
  d: path("M14 17.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM3.5 12c2.25-1.5 4.25 1.5 6.5 0s4.25 1.5 6.5 0c1.25-.75 2.5-.5 4 0");
}

.ol1563b3b {
  d: path("M3.5 5h17v16.5h-17Zm12-2.5V16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ol1563b3b"/><path class="be2_8-can"/></g>`,
		"fallback": "uix-sharp:level-sensor",
	});
}

export default Component;
