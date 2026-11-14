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
		"content": `<style>.rd3ousbki {
  d: path("m9 9.5l3.5 3.5L9 16.5L5.5 13Zm-6.5 10h19M9 6.5c3-3.75 9-3.25 10.5 3.75");
}

.sj6cdsbsm {
  d: path("m17 8.75l2.5 1.5l1.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rd3ousbki"/><path class="sj6cdsbsm"/></g>`,
		"fallback": "uix-sharp:milestone-move",
	});
}

export default Component;
