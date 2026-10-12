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
		"content": `<style>.n6-bn0bqx {
  width: 18.5px;
  height: 11px;
  x: 2.75px;
  y: 10.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.pwmo88bii {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 13.75h.01m3.49 0h.01m3.99 0h.01m3.49 0h.01");
}

.xzx5mv78i {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 17.75h9m-12.75-12h11m-3-3l3 3l-3 3m6.5-6v6");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="n6-bn0bqx"/><path class="pwmo88bii"/><path class="xzx5mv78i"/></g>`,
		"fallback": "iconoven:keyboard-access",
	});
}

export default Component;
