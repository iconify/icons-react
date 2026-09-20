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
		"content": `<style>.a6mnjib5x {
  d: path("M3 10h4");
}

.ck7sgubpk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 5h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fx-2c_44o {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 10h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.l8vricc3a {
  d: path("M17 10h4");
}

.rx5svrbnh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17 10h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tbr--mb3k {
  fill: currentColor;
  d: path("M10 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uau0kschl {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 15h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xedmbxbzm {
  d: path("M10 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.yngda3bvc {
  d: path("M3 15h18");
}
</style><g class="hntgybcog"><path class="tbr--mb3k"/><path class="ck7sgubpk"/><path class="fx-2c_44o"/><path class="rx5svrbnh"/><path class="uau0kschl"/><path class="k6nj2fbya"/><path class="a6mnjib5x"/><path class="xedmbxbzm"/><path class="l8vricc3a"/><path class="yngda3bvc"/></g>`,
		"fallback": "iconmind:null-fill-duotone-thin",
	});
}

export default Component;
