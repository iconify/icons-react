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
		"content": `<style>.j6loa1oiu {
  d: path("M5.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm8 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w4jbf3b0d {
  d: path("M3.5 4.75h17a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1Z");
}
</style><g class="ulnmmdpxh"><path class="w4jbf3b0d"/><path class="j6loa1oiu"/></g>`,
		"fallback": "uix-sharp:smart-button-double",
	});
}

export default Component;
