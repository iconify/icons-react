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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o5__hii-l {
  cx: 12px;
  cy: 12px;
  r: 4.5px;
}

.r75vddc6t {
  d: path("m18.5 14.48l-1.1 1.91m-4.3 2.49h-2.2m-4.3-2.49l-1.1-1.91m0-4.96l1.1-1.91m4.3-2.49h2.2m4.3 2.49l1.1 1.91");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><circle class="o5__hii-l"/><path class="r75vddc6t"/></g>`,
		"fallback": "iconoven:tambourine",
	});
}

export default Component;
