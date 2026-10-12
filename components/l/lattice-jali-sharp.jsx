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
		"content": `<style>.brkx4hmly {
  d: path("m9 11.25l1.5 1.5l-1.5 1.5l-1.5-1.5Zm6 0l1.5 1.5l-1.5 1.5l-1.5-1.5Zm-6 5l1.5 1.5l-1.5 1.5l-1.5-1.5Zm6 0l1.5 1.5l-1.5 1.5l-1.5-1.5ZM12 5.5l1 1.25L12 8l-1-1.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-kdv2bqn {
  d: path("M5 10a7 7 0 0 1 14 0v11.25H5V20Z");
}
</style><g class="x2cwu0gfd"><path class="z-kdv2bqn"/><path class="brkx4hmly"/></g>`,
		"fallback": "iconoven:lattice-jali-sharp",
	});
}

export default Component;
