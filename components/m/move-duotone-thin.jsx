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
		"content": `<style>.cu_n5qbwp {
  d: path("m7 9 -3 3 3 3");
}

.g1gntlbfm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 17 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gv3gpab3b {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m17 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j2r1pso3k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 12h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}

.myu_xsffd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m7 9 -3 3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qrqk-5btd {
  d: path("m9 17 3 3 3 -3");
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.r8-d-gbco {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 7 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sxlwlmkmh {
  d: path("M4 12h16");
}

.t407nkbfi {
  d: path("m9 7 3 -3 3 3");
}

.wj8ybccjk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="wj8ybccjk"/><path class="j2r1pso3k"/><path class="r8-d-gbco"/><path class="g1gntlbfm"/><path class="myu_xsffd"/><path class="gv3gpab3b"/><path class="r7xk8o29f"/><path class="sxlwlmkmh"/><path class="t407nkbfi"/><path class="qrqk-5btd"/><path class="cu_n5qbwp"/><path class="mi_m6achy"/></g>`,
		"fallback": "iconmind:move-duotone-thin",
	});
}

export default Component;
