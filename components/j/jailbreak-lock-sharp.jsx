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
		"content": `<style>.ct9w9mblk {
  d: path("M8 10.25v-3.5a4 4 0 0 1 8 0v.5m-11.25 3h14.5v11H4.75z");
}

.fknzpccmd {
  d: path("m12.5 12.75l-1.75 2.75l2.5 1.5l-1.75 2.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ct9w9mblk"/><path class="fknzpccmd"/></g>`,
		"fallback": "iconoven:jailbreak-lock-sharp",
	});
}

export default Component;
