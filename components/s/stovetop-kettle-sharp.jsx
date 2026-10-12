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
		"content": `<style>.cr_6_9b3y {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 11.75c0-6 9.5-6 9.5 0");
}

.edjhu1bpr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 21.25h16.5");
}

.fyzvyrjwu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 14.5h.01");
}

.syjwupbgm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 18.5h13l1.977.006l-.527-1.906c-1-3.6-3.95-6.35-7.95-6.35S5.05 13 4.05 16.6l-.527 1.906zm12.25-4.75l2-2.75");
}

.tya1vzbon {
  cx: 20px;
  cy: 9.75px;
  r: 1.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="cr_6_9b3y"/><path class="syjwupbgm"/><circle class="tya1vzbon"/><path class="edjhu1bpr"/><path class="fyzvyrjwu"/></g>`,
		"fallback": "iconoven:stovetop-kettle-sharp",
	});
}

export default Component;
