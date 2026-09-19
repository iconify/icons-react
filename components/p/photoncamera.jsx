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
		"content": `<style>.aq1x1zbsk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.112 16.602h8.564m23.012 0h8.109");
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

.m44zgjb-n {
  cx: 24.164px;
  cy: 23.925px;
  r: 9.512px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qfwnw6bjl {
  cx: 24.101px;
  cy: 24.022px;
  r: 13.428px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.th_0luqjs {
  cx: 36.73px;
  cy: 11.242px;
  r: 1.871px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="qfwnw6bjl"/><circle class="m44zgjb-n"/><path class="aq1x1zbsk"/><circle class="th_0luqjs"/>`,
		"fallback": "arcticons:photoncamera",
	});
}

export default Component;
