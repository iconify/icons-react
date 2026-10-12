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
		"content": `<style>.ikvuw6bzw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12.25h.01");
}

.l6gxj6y2q {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.13 3.5a1 1 0 0 1 1.74 0a15 15 0 0 1 6.53 12.1a1 1 0 0 1-.87 1.5a15 15 0 0 1-13.06 0a1 1 0 0 1-.87-1.5a15 15 0 0 1 6.53-12.1");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="l6gxj6y2q"/><path class="ikvuw6bzw"/></g>`,
		"fallback": "iconoven:reuleaux-triangle",
	});
}

export default Component;
