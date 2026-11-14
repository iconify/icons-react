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
		"content": `<style>.f3ydq3xpg {
  d: path("M2.5 5h8v11h-8Zm11 3h8v11h-8Z");
}

.t63tbub5x {
  d: path("M2.5 13.5L6 10l4.5 4m3 2.5L17 13l4.5 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f3ydq3xpg"/><path class="t63tbub5x"/></g>`,
		"fallback": "uix-sharp:stereo-pair",
	});
}

export default Component;
