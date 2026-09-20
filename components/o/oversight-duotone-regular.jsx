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

.c3srb1iyw {
  d: path("M19.5 10.74a8 8 0 0 1 -15.04 0");
}

.dktry7bqc {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h_h0u9b6a {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19.5 10.74a8 8 0 0 1 -15.04 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ykru-q-7x {
  d: path("M4.5 13.26a8 8 0 0 1 15.04 0");
}

.z-t3atbhd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4.5 13.26a8 8 0 0 1 15.04 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="dktry7bqc"/><path class="h_h0u9b6a"/><path class="z-t3atbhd"/><path class="c3srb1iyw"/><path class="ykru-q-7x"/><path class="bo51iypxr"/></g>`,
		"fallback": "iconmind:oversight-duotone-regular",
	});
}

export default Component;
