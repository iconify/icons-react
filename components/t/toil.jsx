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
		"content": `<style>.gq3lnsbfz {
  d: path("M21 12a9 9 0 1 1-1.25-4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xx-cakmif {
  d: path("M19.75 3.75V7.5H17m-3.75.25a2.75 2.75 0 1 0 3 3M11.5 12.5L8 16");
}
</style><g class="ulnmmdpxh"><path class="gq3lnsbfz"/><path class="xx-cakmif"/></g>`,
		"fallback": "uix-sharp:toil",
	});
}

export default Component;
