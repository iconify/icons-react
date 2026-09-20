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
		"content": `<style>.cuqegsxii {
  fill: currentColor;
  d: path("M2 15a2 2 0 0 1 2 -2h4.5a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.dq1p4tb5h {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2 -2h4.5a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.g9-a5bsup {
  d: path("M13.5 4a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-4.5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j3t1fbcok {
  d: path("M2 15a2 2 0 0 1 2 -2h4.5a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.k0nzkxbmq {
  fill: currentColor;
  d: path("M13.5 19.5A2.5 2.5 0 0 1 16 17h3.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5H16a2.5 2.5 0 0 1 -2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r2hn0nart {
  d: path("M13.5 19.5A2.5 2.5 0 0 1 16 17h3.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5H16a2.5 2.5 0 0 1 -2.5 -2.5");
}

.ra9h64bkb {
  fill: currentColor;
  d: path("M13.5 4a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-4.5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.v0renrgmb {
  d: path("M2 4a2 2 0 0 1 2 -2h4.5a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="dq1p4tb5h"/><path class="ra9h64bkb"/><path class="cuqegsxii"/><path class="k0nzkxbmq"/><path class="v0renrgmb"/><path class="g9-a5bsup"/><path class="j3t1fbcok"/><path class="r2hn0nart"/></g>`,
		"fallback": "iconmind:masonry-duotone-thin",
	});
}

export default Component;
