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
		"content": `<style>.c7pp32b9e {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 12h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dng5kz1zs {
  d: path("M10 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.elm0fn4gd {
  d: path("M19 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.gbe8ocb2n {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 8v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h8g0xgbot {
  fill: currentColor;
  d: path("M10 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.i-58-pnpd {
  d: path("M16 8v8");
}

.it83nbbll {
  d: path("M5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v-5f_sb8n {
  fill: currentColor;
  d: path("M19 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vefr08bem {
  fill: currentColor;
  d: path("M5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x26a8iq1c {
  d: path("M2 12h20");
}
</style><g class="nrj6p8qat"><path class="vefr08bem"/><path class="h8g0xgbot"/><path class="v-5f_sb8n"/><path class="c7pp32b9e"/><path class="gbe8ocb2n"/><path class="x26a8iq1c"/><path class="it83nbbll"/><path class="dng5kz1zs"/><path class="i-58-pnpd"/><path class="elm0fn4gd"/></g>`,
		"fallback": "iconmind:offset-duotone-regular",
	});
}

export default Component;
