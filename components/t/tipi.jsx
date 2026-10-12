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
		"content": `<style>.c9alkdxud {
  d: path("m12 11.5l2.75 7.25h-5.5Zm-9.25 9.75h18.5m-17-1.75l-.75 1.75m16.25-1.75l.75 1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.osqbu8buz {
  d: path("m12.35 6.66l6.05 11.43q.35.66-.4.66H6q-.75 0-.4-.66l6.05-11.43q.35-.66.7 0m-2.6-3.91L12.6 6.9m1.65-4.15L11.4 6.9");
}
</style><g class="hntgybcog"><path class="osqbu8buz"/><path class="c9alkdxud"/></g>`,
		"fallback": "iconoven:tipi",
	});
}

export default Component;
