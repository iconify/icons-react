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
		"content": `<style>.b9hi5l-6x {
  d: path("M7.25 8.25h5v4.5h-5ZM18.75 14C19 16 21 17 21 18.5a3 3 0 0 1-6 0c0-1.5 1-2.25 1.5-3c.75.75 1.25 0 2.25-1.5Z");
}

.gu-qtlbgb {
  d: path("M13 21.5H4.5v-16H15v7.2M7.25 5.5v-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gu-qtlbgb"/><path class="b9hi5l-6x"/></g>`,
		"fallback": "uix-sharp:methane-detector",
	});
}

export default Component;
