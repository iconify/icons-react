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
		"content": `<style>.c3x9u-7wg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.385 22.015h4.74m-4.74 3.859h4.74m3.749-3.859h4.741m-4.741 3.859h4.741");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ry0hkee0e {
  cx: 24px;
  cy: 24px;
  r: 2.593px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vqogbbbht {
  cx: 24px;
  cy: 24px;
  r: 0.75px;
  fill: currentColor;
}

.ybpxgwbdz {
  cx: 24.022px;
  cy: 24.011px;
  r: 6.988px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="ybpxgwbdz"/><circle class="ry0hkee0e"/><circle class="vqogbbbht"/><path class="c3x9u-7wg"/>`,
		"fallback": "arcticons:sicmu-player",
	});
}

export default Component;
