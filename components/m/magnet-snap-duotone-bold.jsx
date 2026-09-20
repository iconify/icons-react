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
		"content": `<style>.cg92043wk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14 14a2 2 0 0 1 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cmb7dmbhv {
  d: path("M10 3v11");
}

.d8akb9mvh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18 14a6 6 0 0 1 -12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ek6w2ymjs {
  d: path("M6 3v11");
}

.hh2-r7bhw {
  d: path("M14 14a2 2 0 0 1 -4 0");
}

.ko222axdi {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18 3v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.olqp5-9mh {
  d: path("M14 3v11");
}

.qo1oa5ffe {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 3v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sa7t2q-eb {
  d: path("M18 14a6 6 0 0 1 -12 0");
}

.se2rttqrj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14 3v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tiii5dp5x {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 3v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w7htkxb5b {
  d: path("M18 3v11");
}
</style><g class="s0phu2bbs"><path class="d8akb9mvh"/><path class="tiii5dp5x"/><path class="ko222axdi"/><path class="cg92043wk"/><path class="qo1oa5ffe"/><path class="se2rttqrj"/><path class="sa7t2q-eb"/><path class="ek6w2ymjs"/><path class="w7htkxb5b"/><path class="hh2-r7bhw"/><path class="cmb7dmbhv"/><path class="olqp5-9mh"/></g>`,
		"fallback": "iconmind:magnet-snap-duotone-bold",
	});
}

export default Component;
