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
		"content": `<style>.ar5lnnlvf {
  fill: currentColor;
  d: path("M13 5.5A2.5 2.5 0 0 1 15.5 3h3A2.5 2.5 0 0 1 21 5.5 2.5 2.5 0 0 1 18.5 8h-3A2.5 2.5 0 0 1 13 5.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.e03qxmiyg {
  fill: currentColor;
  d: path("M3 5.5A2.5 2.5 0 0 1 5.5 3h3A2.5 2.5 0 0 1 11 5.5 2.5 2.5 0 0 1 8.5 8h-3A2.5 2.5 0 0 1 3 5.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h95es8zjt {
  fill: currentColor;
  d: path("M3 16.5A2.5 2.5 0 0 1 5.5 14h13a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hzm2gxbyj {
  d: path("M17 8v6");
}

.mk93lqrnh {
  d: path("M7 8v6");
}

.n9mu2_d4r {
  d: path("M3 5.5A2.5 2.5 0 0 1 5.5 3h3A2.5 2.5 0 0 1 11 5.5 2.5 2.5 0 0 1 8.5 8h-3A2.5 2.5 0 0 1 3 5.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sturihscz {
  d: path("M13 5.5A2.5 2.5 0 0 1 15.5 3h3A2.5 2.5 0 0 1 21 5.5 2.5 2.5 0 0 1 18.5 8h-3A2.5 2.5 0 0 1 13 5.5");
}

.ywoqp9dou {
  d: path("M3 16.5A2.5 2.5 0 0 1 5.5 14h13a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5");
}
</style><g class="nrj6p8qat"><path class="e03qxmiyg"/><path class="ar5lnnlvf"/><path class="h95es8zjt"/><path class="n9mu2_d4r"/><path class="sturihscz"/><path class="mk93lqrnh"/><path class="hzm2gxbyj"/><path class="ywoqp9dou"/></g>`,
		"fallback": "iconmind:task-merge-duotone-regular",
	});
}

export default Component;
