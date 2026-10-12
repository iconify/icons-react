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
		"content": `<style>.gfyvvti5q {
  d: path("M5.25 9.5L12 3.75l6.75 5.75v11.75H5.25v-2Z");
}

.mux9f8txu {
  d: path("M9 11h6v4.25H9zm-.75 7.25h7.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gfyvvti5q"/><path class="mux9f8txu"/></g>`,
		"fallback": "iconoven:remote-work-sharp",
	});
}

export default Component;
