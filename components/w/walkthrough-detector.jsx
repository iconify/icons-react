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
		"content": `<style>.ci5nlabms {
  d: path("M8 12.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.p_l24xs1z {
  d: path("M5 21.5V3h14v18.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p_l24xs1z"/><path class="ci5nlabms"/></g>`,
		"fallback": "uix-sharp:walkthrough-detector",
	});
}

export default Component;
