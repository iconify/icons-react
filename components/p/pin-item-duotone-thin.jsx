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
		"content": `<style>.bt_2bvgpa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ck7sgubpk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 5h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i2i_szzgu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 12v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.kf5i1zqrr {
  fill: currentColor;
  d: path("M16 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.oumlmtbql {
  d: path("M16 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.tbz--4bgo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 12h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xa3jgydgh {
  d: path("M3 12h9");
}

.zn_a46_dj {
  d: path("M18 12v3");
}
</style><g class="hntgybcog"><path class="kf5i1zqrr"/><path class="ck7sgubpk"/><path class="tbz--4bgo"/><path class="i2i_szzgu"/><path class="bt_2bvgpa"/><path class="k6nj2fbya"/><path class="xa3jgydgh"/><path class="oumlmtbql"/><path class="zn_a46_dj"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:pin-item-duotone-thin",
	});
}

export default Component;
