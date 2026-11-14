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
		"content": `<style>.f84hqvbin {
  d: path("M6.75 18.5H9m3.5 0h2.25m3.5 0h2.5V4h-8l2 3l-2 3h8");
}

.kczsjt3_v {
  d: path("M3.25 18.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm5.75 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm5.75 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kczsjt3_v"/><path class="f84hqvbin"/></g>`,
		"fallback": "uix-sharp:milestone-timeline",
	});
}

export default Component;
