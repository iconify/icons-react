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
		"content": `<style>.bvk48sbfr {
  cx: 25.165px;
  cy: 22.721px;
  r: 16.612px;
}

.f_v_dfbgn {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
}

.l0mg34bqc {
  cx: 23.139px;
  cy: 24.408px;
  r: 10.762px;
}

.mdimy_3sv {
  d: path("m20.712 20.011l-.204 8.71l7.36-4.392z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="f_v_dfbgn"/><circle class="bvk48sbfr"/><circle class="l0mg34bqc"/><path class="mdimy_3sv"/></g>`,
		"fallback": "arcticons:mpv",
	});
}

export default Component;
