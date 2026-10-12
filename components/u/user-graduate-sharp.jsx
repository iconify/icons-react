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
		"content": `<style>.qux1fbbed {
  d: path("M6 20.25h12.75v-.75c0-2.2-3.04-3.75-6.75-3.75S5.25 17.3 5.25 19.5v.75zm6.56-17.28l7.63 3.06l.56.22l-.56.22l-7.63 3.06l-.56.22l-.56-.22l-7.63-3.06l-.56-.22l.56-.22l7.63-3.06l.56-.22zm8.19 3.53v3.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ye0axzb1w {
  cx: 12px;
  cy: 10.25px;
  r: 3px;
}
</style><g class="x2cwu0gfd"><circle class="ye0axzb1w"/><path class="qux1fbbed"/></g>`,
		"fallback": "iconoven:user-graduate-sharp",
	});
}

export default Component;
