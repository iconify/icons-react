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

.d836q4bga {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 8h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f6ff07bzy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 5v9h16V5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kpspt_bpo {
  d: path("M7 8h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sd8rzobni {
  d: path("M17 17v2.5");
}

.t-ht0uq7t {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 18.5V21");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u4z3yfbwn {
  d: path("M4 5v9h16V5");
}

.wgl_uc9to {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 17v2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="f6ff07bzy"/><path class="d836q4bga"/><path class="wgl_uc9to"/><path class="t-ht0uq7t"/><path class="u4z3yfbwn"/><path class="kpspt_bpo"/><path class="sd8rzobni"/><path class="bcvts4b4i"/></g>`,
		"fallback": "iconmind:load-shed-duotone-bold",
	});
}

export default Component;
