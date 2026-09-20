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
		"content": `<style>.eatg5iigc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 14h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mu-p7sbhe {
  d: path("M16.12 9.88a3 3 0 0 1 0 4.24");
}

.ni7913pru {
  d: path("M3 14h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o1lmw5b2k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16.12 9.88a3 3 0 0 1 0 4.24");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pklra4bos {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18.95 7.05a7 7 0 0 1 0 9.9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pzj8z5bhk {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 10h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qm17m3bad {
  d: path("M18.95 7.05a7 7 0 0 1 0 9.9");
}

.wt9oil39f {
  d: path("M3 10h5");
}
</style><g class="nrj6p8qat"><path class="pzj8z5bhk"/><path class="eatg5iigc"/><path class="o1lmw5b2k"/><path class="pklra4bos"/><path class="wt9oil39f"/><path class="ni7913pru"/><path class="mu-p7sbhe"/><path class="qm17m3bad"/></g>`,
		"fallback": "iconmind:speech-synth-duotone-regular",
	});
}

export default Component;
