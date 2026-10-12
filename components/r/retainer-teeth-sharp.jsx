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
		"content": `<style>.csl6ycckc {
  d: path("M6.5 5v4a5.5 5.5 0 0 0 1.61 3.89a1.42 1.42 0 0 0 2.47 1.42a1.42 1.42 0 0 0 2.84 0a1.42 1.42 0 0 0 2.47-1.42A5.5 5.5 0 0 0 17.5 9V3h-11z");
}

.kwhiv-93m {
  d: path("M2.84 8v4.33a9.75 9.75 0 0 0 18.32 0V8");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="csl6ycckc"/><path class="kwhiv-93m"/></g>`,
		"fallback": "iconoven:retainer-teeth-sharp",
	});
}

export default Component;
