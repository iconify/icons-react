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
		"content": `<style>.bxj_sjz_b {
  cx: 24px;
  cy: 19.297px;
  r: 14.797px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hlouh2bty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.496 33.895v5.276h10.809V43.5h-26.61v-4.329h10.809v-5.276");
}

.n87vf_zjw {
  cx: 24px;
  cy: 16.369px;
  r: 2.282px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zco1r7y-k {
  cx: 24px;
  cy: 19.052px;
  r: 7.91px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="zco1r7y-k"/><circle class="bxj_sjz_b"/><circle class="n87vf_zjw"/><path class="hlouh2bty"/>`,
		"fallback": "arcticons:v380-pro",
	});
}

export default Component;
