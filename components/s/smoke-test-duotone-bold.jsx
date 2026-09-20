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
		"content": `<style>.km9uii_ku {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t-cb7k02e {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m8 14 2.5 -2.5L13 14l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yc_r44biv {
  d: path("m8 14 2.5 -2.5L13 14l2.5 -2.5");
}
</style><g class="s0phu2bbs"><path class="km9uii_ku"/><path class="t-cb7k02e"/><path class="ri2m-q_tv"/><path class="yc_r44biv"/></g>`,
		"fallback": "iconmind:smoke-test-duotone-bold",
	});
}

export default Component;
