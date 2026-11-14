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
		"content": `<style>.i8sgstbhh {
  d: path("M9.5 12c0-3.5 1.25-5 5-5c0 3.5-1.25 5-5 5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xi9p411rf {
  d: path("M9 17v-1.5c-2.25-1.25-3.5-3.5-3.5-6a6.5 6.5 0 0 1 13 0c0 2.5-1.25 4.75-3.5 6V17Zm.5 3.5h5");
}
</style><g class="ulnmmdpxh"><path class="xi9p411rf"/><path class="i8sgstbhh"/></g>`,
		"fallback": "uix-sharp:leaf-bulb",
	});
}

export default Component;
