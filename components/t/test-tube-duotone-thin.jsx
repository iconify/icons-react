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
		"content": `<style>.biz7t_4gn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19 13v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c3wl0l-ou {
  d: path("M19 13v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kyx8xyb8s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 13h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pbz4y6llk {
  d: path("M5 13v6");
}

.r3ry-mu7u {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 13v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rrxs_z4kv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 3h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sdu6a9xcp {
  d: path("M9 3v12l3 3 3 -3V3");
}

.va9i39bae {
  d: path("M7 3h10");
}

.x822khbin {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 3v12l3 3 3 -3V3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y07a50u1t {
  d: path("M5 13h14");
}
</style><g class="hntgybcog"><path class="x822khbin"/><path class="rrxs_z4kv"/><path class="kyx8xyb8s"/><path class="r3ry-mu7u"/><path class="biz7t_4gn"/><path class="sdu6a9xcp"/><path class="va9i39bae"/><path class="y07a50u1t"/><path class="pbz4y6llk"/><path class="c3wl0l-ou"/></g>`,
		"fallback": "iconmind:test-tube-duotone-thin",
	});
}

export default Component;
