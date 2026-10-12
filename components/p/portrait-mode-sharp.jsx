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
		"content": `<style>.drtvz1btn {
  cx: 12px;
  cy: 8.5px;
  r: 2.25px;
}

.w34_6db1d {
  d: path("M4.75 8V3.75H9m6 0h4.25V8m0 8v4.25H15m-6 0H4.75V16");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygyw9ob-w {
  d: path("M7.75 17.5a4.25 4.25 0 0 1 8.5 0Z");
}
</style><g class="x2cwu0gfd"><path class="w34_6db1d"/><circle class="drtvz1btn"/><path class="ygyw9ob-w"/></g>`,
		"fallback": "iconoven:portrait-mode-sharp",
	});
}

export default Component;
