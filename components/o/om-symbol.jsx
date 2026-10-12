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
		"content": `<style>.oknkunbgp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 14.25c1-1.75 2.25-2.75 3.75-2.75c2.25 0 3.75 2 3.75 4.75S17.75 21 15.75 21m-2-14.75c1.25 1.5 3.75 1.5 5 0");
}

.w4iarnbhm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 6c.9-.85 2.1-1.25 3.25-1.25a3 3 0 0 1 0 6H6.25m1.25 0a4.5 4.5 0 1 1-3.75 7");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zo02lrkix {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.25 3.25h.01");
}
</style><g class="y9tr6bcfx"><path class="w4iarnbhm"/><path class="oknkunbgp"/><path class="zo02lrkix"/></g>`,
		"fallback": "iconoven:om-symbol",
	});
}

export default Component;
