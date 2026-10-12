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
		"content": `<style>.b94e22b-z {
  width: 18.5px;
  height: 5px;
  x: 2.75px;
  y: 12.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.gcnz8umfe {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9.75v-2.5m5 2.5v-3.5m5 3.5v-2.5");
}

.p4sy_hbre {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 15.25h.01m4.99 0h.01m4.99 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="b94e22b-z"/><path class="p4sy_hbre"/><path class="gcnz8umfe"/></g>`,
		"fallback": "iconoven:light-strip",
	});
}

export default Component;
