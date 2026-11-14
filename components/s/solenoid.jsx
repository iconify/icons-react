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
		"content": `<style>.e9seflbvn {
  d: path("M3.5 10.5c0-7 17-7 17 0");
}

.suv9qbbmd {
  d: path("M6 14.5a2 4 0 1 1 4 0a2 4 0 1 1-4 0m4 0a2 4 0 1 1 4 0a2 4 0 1 1-4 0m4 0a2 4 0 1 1 4 0a2 4 0 1 1-4 0m-11.5 0H6m12 0h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="suv9qbbmd"/><path class="e9seflbvn"/></g>`,
		"fallback": "uix-sharp:solenoid",
	});
}

export default Component;
