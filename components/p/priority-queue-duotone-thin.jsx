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
		"content": `<style>.ecismzb4h {
  d: path("M20 15V9");
}

.fvyu0cc4r {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 13h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hu7_04b5x {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 18h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i-ifqlxrd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m18 11 2 -2 2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kh31pt5af {
  d: path("M3 13h14");
}

.mo-r4ib5t {
  d: path("m18 11 2 -2 2 2");
}

.ovzzbs_1x {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 8h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t99bgtbzx {
  d: path("M3 18h14");
}

.yay79grql {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M20 15V9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zuuudpbwi {
  d: path("M3 8h14");
}
</style><g class="hntgybcog"><path class="ovzzbs_1x"/><path class="fvyu0cc4r"/><path class="hu7_04b5x"/><path class="yay79grql"/><path class="i-ifqlxrd"/><path class="zuuudpbwi"/><path class="kh31pt5af"/><path class="t99bgtbzx"/><path class="ecismzb4h"/><path class="mo-r4ib5t"/></g>`,
		"fallback": "iconmind:priority-queue-duotone-thin",
	});
}

export default Component;
