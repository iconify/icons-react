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
		"content": `<style>.cdixnqw_i {
  d: path("M8.75 16.5V8m-2 2l2-2l2 2m4.5 6.5V8m-2 2l2-2l2 2");
}

.p95o4hbbt {
  d: path("M2.75 3.75h18.5v17.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="p95o4hbbt"/><path class="cdixnqw_i"/></g>`,
		"fallback": "iconoven:this-side-up-sharp",
	});
}

export default Component;
