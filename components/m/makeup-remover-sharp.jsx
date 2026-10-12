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
		"content": `<style>.ndk8nbc8e {
  d: path("M4.75 2.75h4v2.5h-4zm-2 5.5h8v13h-8z");
}

.ve3b9e3yv {
  d: path("m6.75 12.25l1.5 1.725v.875a1.5 1.5 0 0 1-3 0v-.875z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygphxfbhc {
  cx: 17.25px;
  cy: 17.25px;
  r: 4px;
}

.z6yqdkbsz {
  d: path("M15.5 15.75H19m-3.5 3H19");
}
</style><g class="x2cwu0gfd"><path class="ndk8nbc8e"/><path class="ve3b9e3yv"/><circle class="ygphxfbhc"/><path class="z6yqdkbsz"/></g>`,
		"fallback": "iconoven:makeup-remover-sharp",
	});
}

export default Component;
