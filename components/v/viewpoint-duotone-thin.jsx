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
		"content": `<style>.acyg6nb1v {
  d: path("M10 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.bx2r9yb9w {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6.36 5.95a6 6 0 0 1 11.28 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fsuht_b8c {
  fill: currentColor;
  d: path("M10 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.idhymedkk {
  d: path("m2 20 6 -6 3 3 5 -5 5 5");
}

.oze4upblc {
  d: path("M6.36 5.95a6 6 0 0 1 11.28 0");
}

.vosnu143j {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m2 20 6 -6 3 3 5 -5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="fsuht_b8c"/><path class="bx2r9yb9w"/><path class="vosnu143j"/><path class="oze4upblc"/><path class="acyg6nb1v"/><path class="idhymedkk"/></g>`,
		"fallback": "iconmind:viewpoint-duotone-thin",
	});
}

export default Component;
