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
		"content": `<style>.a0g_eunes {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 12h.01");
}

.fuflf4bvf {
  width: 15px;
  height: 7.5px;
  x: 2.75px;
  y: 8.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.xsqjk_bkd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.75 12h1a1.5 1.5 0 0 1 1.5 1.5v7.75M6.75 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0-3m4.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0-3");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="fuflf4bvf"/><path class="xsqjk_bkd"/><path class="a0g_eunes"/></g>`,
		"fallback": "iconoven:surge-protector",
	});
}

export default Component;
