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
		"content": `<style>.arao4zbuf {
  fill: currentColor;
  d: path("M3 12a9 4.5 0 1 1 18 0 9 4.5 0 1 1 -18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o-vpc-waj {
  d: path("M3 12a9 4.5 0 1 1 18 0 9 4.5 0 1 1 -18 0");
}

.yq_iz_bvt {
  d: path("M6 12a6 3 0 1 1 12 0 6 3 0 1 1 -12 0");
}

.z_pwnvbbd {
  fill: currentColor;
  d: path("M6 12a6 3 0 1 1 12 0 6 3 0 1 1 -12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="arao4zbuf"/><path class="z_pwnvbbd"/><path class="o-vpc-waj"/><path class="yq_iz_bvt"/></g>`,
		"fallback": "iconmind:rug-duotone-thin",
	});
}

export default Component;
