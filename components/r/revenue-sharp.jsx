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
		"content": `<style>.jfjzqbsaf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 10.25h18.5v11H2.75z");
}

.k0a36_yae {
  cx: 12px;
  cy: 15.75px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p6vfrcxbc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 15.75h.01m10.99 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.znlnqjb3d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.75v-5m-3 3l3-3l3 3");
}
</style><g class="ux2u0rbkq"><path class="jfjzqbsaf"/><circle class="k0a36_yae"/><path class="p6vfrcxbc"/><path class="znlnqjb3d"/></g>`,
		"fallback": "iconoven:revenue-sharp",
	});
}

export default Component;
