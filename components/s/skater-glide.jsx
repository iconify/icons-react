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
		"content": `<style>.dmrkpqeas {
  d: path("M11 21h6a1.5 1.5 0 0 0 1.5-1.5");
}

.hpoyl6bva {
  d: path("M11.5 4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm2 5.25L13 14.5m-5-2l10.5-3M5 16.5l8-2l1 6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hpoyl6bva"/><path class="dmrkpqeas"/></g>`,
		"fallback": "uix-sharp:skater-glide",
	});
}

export default Component;
