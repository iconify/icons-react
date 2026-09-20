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
		"content": `<style>.elmoo_bpw {
  d: path("M15 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hiqcqfbaf {
  d: path("M12 8v10");
}

.jrpnc2pnl {
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.k38v4qb6f {
  fill: currentColor;
  d: path("M15 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qye2ovraz {
  d: path("M7 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v9yk_ubvf {
  fill: currentColor;
  d: path("M7 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.z92okmbgh {
  fill: currentColor;
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="z92okmbgh"/><path class="v9yk_ubvf"/><path class="k38v4qb6f"/><path class="jrpnc2pnl"/><path class="hiqcqfbaf"/><path class="qye2ovraz"/><path class="elmoo_bpw"/></g>`,
		"fallback": "iconmind:visual-diff-duotone-bold",
	});
}

export default Component;
