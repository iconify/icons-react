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
		"content": `<style>.e7id6tmtd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.875 5.5v8.077h13.486M18.998 28.853l6.288 10.787H12.71z");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.ixyph9r7m {
  cx: 18.998px;
  cy: 23.465px;
  r: 0.75px;
  fill: currentColor;
}

.jnm4nlbxm {
  cx: 18.998px;
  cy: 12.688px;
  r: 0.75px;
  fill: currentColor;
}

.ydlxywb_q {
  cx: 18.998px;
  cy: 18.076px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="e7id6tmtd"/><path class="i9clfwm2k"/><circle class="ixyph9r7m"/><circle class="ydlxywb_q"/><circle class="jnm4nlbxm"/>`,
		"fallback": "arcticons:krasses-spiel",
	});
}

export default Component;
