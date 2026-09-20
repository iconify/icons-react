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
		"content": `<style>.bpzfr_bbd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M11 14.5v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e50_rk4mb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 14.5v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fevuzkbbx {
  d: path("M15 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.gam3cw54g {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 16h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mjlof01ij {
  d: path("M6 14.5v3");
}

.oibtokbpn {
  fill: currentColor;
  d: path("M15 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ot1t9gb0r {
  d: path("M11 14.5v3");
}

.pubh6ib-w {
  d: path("M17 7v9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uxr7ybfcj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 7v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="s0phu2bbs"><path class="oibtokbpn"/><path class="gam3cw54g"/><path class="e50_rk4mb"/><path class="bpzfr_bbd"/><path class="uxr7ybfcj"/><path class="ys-dg812g"/><path class="mjlof01ij"/><path class="ot1t9gb0r"/><path class="fevuzkbbx"/><path class="pubh6ib-w"/></g>`,
		"fallback": "iconmind:percentile-rank-duotone-bold",
	});
}

export default Component;
