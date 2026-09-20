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
		"content": `<style>.erg9t8bfr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m13 9 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iznp-rb0i {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 15 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oatlkcbwl {
  d: path("m3 15 8 -8");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uj_hf0zyk {
  d: path("m13 9 6 6");
}

.xaz90clio {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="iznp-rb0i"/><path class="erg9t8bfr"/><path class="xaz90clio"/><path class="oatlkcbwl"/><path class="uj_hf0zyk"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:trend-break-duotone-bold",
	});
}

export default Component;
