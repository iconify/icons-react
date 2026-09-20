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
		"content": `<style>.h3vxj9bek {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19 14a7 7 0 0 1 -14 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hl7xec6ty {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19 4v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.on4ig8t5d {
  d: path("M5 4v10");
}

.r0clwlbxv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 4v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.smyhnv9tm {
  d: path("M19 14a7 7 0 0 1 -14 0");
}

.ydl8e0r_x {
  d: path("M19 4v10");
}
</style><g class="hntgybcog"><path class="r0clwlbxv"/><path class="h3vxj9bek"/><path class="hl7xec6ty"/><path class="on4ig8t5d"/><path class="smyhnv9tm"/><path class="ydl8e0r_x"/></g>`,
		"fallback": "iconmind:union-duotone-thin",
	});
}

export default Component;
