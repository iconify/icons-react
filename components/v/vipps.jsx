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
		"content": `<style>.j98an1bqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z");
}

.r0u1p1gdv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.083 23.803c5.977 8.485 14.174 11.149 21.577 1.15");
}

.y70lhiizb {
  cx: 28.304px;
  cy: 16.948px;
  r: 0.75px;
  fill: currentColor;
}
</style><circle class="y70lhiizb"/><path class="r0u1p1gdv"/><path class="j98an1bqd"/>`,
		"fallback": "arcticons:vipps",
	});
}

export default Component;
