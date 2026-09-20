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
		"content": `<style>.b0batih_b {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 5h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cabegubdh {
  d: path("M14 5h7");
}

.e7pgrp-wx {
  d: path("M2 12h6");
}

.gy18-zqeb {
  d: path("M14 19h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l4pybmb4a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 12h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ltxni2ncy {
  d: path("M14 12h7");
}

.pwjia2r6k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sftcrugme {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 10 2.5 2.5L9 15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y5__l6b-e {
  d: path("m9 10 2.5 2.5L9 15");
}

.ztw87lr4b {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 19h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="pwjia2r6k"/><path class="sftcrugme"/><path class="b0batih_b"/><path class="l4pybmb4a"/><path class="ztw87lr4b"/><path class="e7pgrp-wx"/><path class="y5__l6b-e"/><path class="cabegubdh"/><path class="ltxni2ncy"/><path class="gy18-zqeb"/></g>`,
		"fallback": "iconmind:query-expand-duotone-thin",
	});
}

export default Component;
