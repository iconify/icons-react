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
		"content": `<style>.bcvts4b4i {
  d: path("M13 18.5V21");
}

.d88fxdrij {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 17v2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kpspt_bpo {
  d: path("M7 8h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qdgfzsc3i {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 8h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sd8rzobni {
  d: path("M17 17v2.5");
}

.u4z3yfbwn {
  d: path("M4 5v9h16V5");
}

.wcv8sebza {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 18.5V21");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yy2vfutpj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 5v9h16V5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="yy2vfutpj"/><path class="qdgfzsc3i"/><path class="d88fxdrij"/><path class="wcv8sebza"/><path class="u4z3yfbwn"/><path class="kpspt_bpo"/><path class="sd8rzobni"/><path class="bcvts4b4i"/></g>`,
		"fallback": "iconmind:load-shed-duotone-regular",
	});
}

export default Component;
