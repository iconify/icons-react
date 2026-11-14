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
		"content": `<style>.ss1knmssx {
  d: path("M9 7h3a3 3 0 0 1 0 6H9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yxj9b3b3t {
  d: path("M3.5 3v18h17V3M9 17.5V7");
}
</style><g class="ulnmmdpxh"><path class="yxj9b3b3t"/><path class="ss1knmssx"/></g>`,
		"fallback": "uix-sharp:parking-bay",
	});
}

export default Component;
