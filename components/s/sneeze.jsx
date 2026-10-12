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
		"content": `<style>.j1ysqbcqi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.25 9.25l1.5 1l-1.5 1m5.5-2l-1.5 1l1.5 1m-4.25 3h3");
}

.kzxgoablr {
  cx: 9px;
  cy: 12px;
  r: 6.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yg-xhpbdd {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.75 12h.01m2.49-2.75h.01m.24 4.25h.01M18 15.75h.01M18 8.25h.01");
}
</style><g class="y9tr6bcfx"><circle class="kzxgoablr"/><path class="j1ysqbcqi"/><path class="yg-xhpbdd"/></g>`,
		"fallback": "iconoven:sneeze",
	});
}

export default Component;
