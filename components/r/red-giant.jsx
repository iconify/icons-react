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
		"content": `<style>.b56ek1jcy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 20h.01");
}

.owh_4mojv {
  cx: 12.75px;
  cy: 11.75px;
  r: 6.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t9r_9kbac {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.31 16.63A9.75 9.75 0 0 1 7.88 3.31");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="owh_4mojv"/><path class="t9r_9kbac"/><path class="b56ek1jcy"/></g>`,
		"fallback": "iconoven:red-giant",
	});
}

export default Component;
