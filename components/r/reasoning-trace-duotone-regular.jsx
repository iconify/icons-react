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
		"content": `<style>.g3lrzsbos {
  d: path("M3 5h7");
}

.ilov00b6b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 10h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j3u61sbvu {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M11 15h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m_5u0ccez {
  d: path("M15 20h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q83h1dbic {
  d: path("M11 15h7");
}

.sk9l6wbqr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 5h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u8yngjzzs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 20h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uepsd3bvn {
  d: path("M7 10h7");
}
</style><g class="nrj6p8qat"><path class="sk9l6wbqr"/><path class="ilov00b6b"/><path class="j3u61sbvu"/><path class="u8yngjzzs"/><path class="g3lrzsbos"/><path class="uepsd3bvn"/><path class="q83h1dbic"/><path class="m_5u0ccez"/></g>`,
		"fallback": "iconmind:reasoning-trace-duotone-regular",
	});
}

export default Component;
