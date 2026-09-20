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
		"content": `<style>.cfc1y5xko {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17 4v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.doha7k7ng {
  d: path("M10 11v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hpwoyl28q {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 18h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m520t0blj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 11v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tbjorldxr {
  d: path("M3 18h7");
}

.uhg14jb-c {
  d: path("M10 11h7");
}

.v3tixu15n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 11h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xh8-ghm1o {
  d: path("M17 4v7");
}
</style><g class="hntgybcog"><path class="hpwoyl28q"/><path class="m520t0blj"/><path class="v3tixu15n"/><path class="cfc1y5xko"/><path class="tbjorldxr"/><path class="doha7k7ng"/><path class="uhg14jb-c"/><path class="xh8-ghm1o"/></g>`,
		"fallback": "iconmind:step-duotone-thin",
	});
}

export default Component;
