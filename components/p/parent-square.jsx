import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aawfs4bld {
  cx: 13px;
  cy: 35px;
  r: 7.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.j0rn7cczr {
  cx: 35px;
  cy: 13px;
  r: 7.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qc2t_bckz {
  cx: 13px;
  cy: 13px;
  r: 7.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qc9kpmbvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.94 37.5h-7.88m7.88-27h-7.88M37.5 27.94v-7.88m-27 7.88v-7.88");
}

.umaxrfb5x {
  cx: 35px;
  cy: 35px;
  r: 7.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vg5ghqb5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.94 32.5h-7.88m7.88-17h-7.88M32.5 27.94v-7.88m-17 7.88v-7.88");
}
</style><path class="qc9kpmbvq"/><circle class="qc2t_bckz"/><circle class="aawfs4bld"/><circle class="j0rn7cczr"/><circle class="umaxrfb5x"/><path class="vg5ghqb5f"/>`,
		"fallback": "arcticons:parent-square",
	});
}

export default Component;
