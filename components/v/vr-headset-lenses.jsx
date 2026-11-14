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
		"content": `<style>.eyb3wsbom {
  d: path("M5.5 5h13A3.5 3.5 0 0 1 22 8.5v7a3.5 3.5 0 0 1-3.5 3.5h-4a2.5 2.5 0 0 0-5 0h-4A3.5 3.5 0 0 1 2 15.5v-7A3.5 3.5 0 0 1 5.5 5Z");
}

.lp3uxhbbl {
  d: path("M5 11.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm8.5 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eyb3wsbom"/><path class="lp3uxhbbl"/></g>`,
		"fallback": "uix-sharp:vr-headset-lenses",
	});
}

export default Component;
