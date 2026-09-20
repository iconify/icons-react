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
		"content": `<style>.a37_hz5ge {
  fill: currentColor;
  d: path("M3 11h18l-7 7v4h-4v-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.afqgjebgv {
  fill: currentColor;
  d: path("M5.5 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
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

.lgv20g91n {
  d: path("M3 11h18l-7 7v4h-4v-4Z");
}

.m68wh_s2h {
  d: path("m10.5 7 2 2");
}

.rqvtrb2by {
  d: path("M5.5 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="afqgjebgv"/><path class="a37_hz5ge"/><path class="rqvtrb2by"/><path class="m68wh_s2h"/><path class="lgv20g91n"/></g>`,
		"fallback": "iconmind:postfilter-duotone-thin",
	});
}

export default Component;
