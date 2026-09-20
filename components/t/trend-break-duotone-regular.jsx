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
		"content": `<style>.dd2oi04rr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oatlkcbwl {
  d: path("m3 15 8 -8");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.u6cloobpg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 15 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uj_hf0zyk {
  d: path("m13 9 6 6");
}

.vrf1bubjr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m13 9 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="u6cloobpg"/><path class="vrf1bubjr"/><path class="dd2oi04rr"/><path class="oatlkcbwl"/><path class="uj_hf0zyk"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:trend-break-duotone-regular",
	});
}

export default Component;
