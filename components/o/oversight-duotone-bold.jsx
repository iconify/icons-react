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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.bq784cbsg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19.5 10.74a8 8 0 0 1 -15.04 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c3srb1iyw {
  d: path("M19.5 10.74a8 8 0 0 1 -15.04 0");
}

.dktry7bqc {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ykru-q-7x {
  d: path("M4.5 13.26a8 8 0 0 1 15.04 0");
}

.zvzge15qu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4.5 13.26a8 8 0 0 1 15.04 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="dktry7bqc"/><path class="bq784cbsg"/><path class="zvzge15qu"/><path class="c3srb1iyw"/><path class="ykru-q-7x"/><path class="bo51iypxr"/></g>`,
		"fallback": "iconmind:oversight-duotone-bold",
	});
}

export default Component;
