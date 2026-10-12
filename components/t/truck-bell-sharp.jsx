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
		"content": `<style>.do8xzdz-j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 13.75h.01m11.99 0h.01m-6.01 4h.01");
}

.e4lze6hle {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h17M6 3.5V8m6-4.5v4m6-4V8M3.5 10.75a2.5 2.75 0 0 1 5 0v1h-5Zm12 0a2.5 2.75 0 0 1 5 0v1h-5Zm-6 4a2.5 2.75 0 0 1 5 0v1h-5Z");
}

.i9w8ehb0u {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.5V12");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="e4lze6hle"/><path class="do8xzdz-j"/><path class="i9w8ehb0u"/></g>`,
		"fallback": "iconoven:truck-bell-sharp",
	});
}

export default Component;
