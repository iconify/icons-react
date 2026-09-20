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
		"content": `<style>.d3d-x8bje {
  d: path("m20 14 -4 4");
}

.dpvrwwhil {
  d: path("M5 9h8");
}

.kyzbdrb4r {
  d: path("m16 14 4 4");
}

.nnzlfsekh {
  d: path("M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r0-aom3qb {
  fill: currentColor;
  d: path("M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x26a8iq1c {
  d: path("M2 12h20");
}
</style><g class="nrj6p8qat"><path class="r0-aom3qb"/><path class="nnzlfsekh"/><path class="x26a8iq1c"/><path class="dpvrwwhil"/><path class="kyzbdrb4r"/><path class="d3d-x8bje"/></g>`,
		"fallback": "iconmind:soft-delete-duotone-regular",
	});
}

export default Component;
