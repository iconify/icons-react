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
		"content": `<style>.exx4qg62z {
  d: path("M7 15a5 5 0 0 1 10 0");
}

.ffhg2obzl {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m19 8 -2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lgv7os48g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 18h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nojmwybsp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 4.5V7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o8od38cnm {
  d: path("M4 18h16");
}

.omq19fbzw {
  d: path("m19 8 -2 2");
}

.rtydvac2z {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 15a5 5 0 0 1 10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xaedo1bnv {
  d: path("m5 8 2 2");
}

.yy7rcrbfy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m5 8 2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z5iv6lbtc {
  d: path("M12 4.5V7");
}
</style><g class="hntgybcog"><path class="rtydvac2z"/><path class="lgv7os48g"/><path class="nojmwybsp"/><path class="yy7rcrbfy"/><path class="ffhg2obzl"/><path class="exx4qg62z"/><path class="o8od38cnm"/><path class="z5iv6lbtc"/><path class="xaedo1bnv"/><path class="omq19fbzw"/></g>`,
		"fallback": "iconmind:sunset-header-duotone-thin",
	});
}

export default Component;
