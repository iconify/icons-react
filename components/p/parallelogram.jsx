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
		"content": `<style>.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.y01nmccvj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.75h9.5q2 0 1.29 1.87l-4.08 10.76Q16 19.25 14 19.25H4.5q-2 0-1.29-1.87L7.29 6.62Q8 4.75 10 4.75");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="y01nmccvj"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:parallelogram",
	});
}

export default Component;
