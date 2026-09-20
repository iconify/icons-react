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
		"content": `<style>.epwe3rblo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 9h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f07crcb1a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 16 2.5 -2.5L8 16l2.5 -2.5L13 16l2.5 -2.5L18 16l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i80sg_6wn {
  d: path("m3 16 2.5 -2.5L8 16l2.5 -2.5L13 16l2.5 -2.5L18 16l2.5 -2.5");
}

.j835zw5-z {
  d: path("M3 9h18");
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.r0_oskb4z {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 4h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="r0_oskb4z"/><path class="epwe3rblo"/><path class="f07crcb1a"/><path class="mg7aqnbsf"/><path class="j835zw5-z"/><path class="i80sg_6wn"/></g>`,
		"fallback": "iconmind:underline-wavy-duotone-thin",
	});
}

export default Component;
