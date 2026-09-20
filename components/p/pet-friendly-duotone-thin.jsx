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
		"content": `<style>.aff9hemvj {
  d: path("M9 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.dx0ubwbyy {
  d: path("M7 16a5 5 0 0 1 10 0 4 4 0 0 1 -5 4 4 4 0 0 1 -5 -4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.keqc2pbxm {
  d: path("M4 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.m3bn7sb5q {
  fill: currentColor;
  d: path("M9 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nxfhmrd0m {
  fill: currentColor;
  d: path("M7 16a5 5 0 0 1 10 0 4 4 0 0 1 -5 4 4 4 0 0 1 -5 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r8g367bdl {
  d: path("M14.5 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rvz2lnbll {
  fill: currentColor;
  d: path("M4 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uk8jjybxx {
  fill: currentColor;
  d: path("M14.5 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="rvz2lnbll"/><path class="m3bn7sb5q"/><path class="uk8jjybxx"/><path class="nxfhmrd0m"/><path class="keqc2pbxm"/><path class="aff9hemvj"/><path class="r8g367bdl"/><path class="dx0ubwbyy"/></g>`,
		"fallback": "iconmind:pet-friendly-duotone-thin",
	});
}

export default Component;
