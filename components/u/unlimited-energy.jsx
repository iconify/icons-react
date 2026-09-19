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
		"content": `<style>.a4k1u4b1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.024 20.24v17.803M13.376 27.152C4.562 14.07 15.906 4.5 24.116 4.5s19.026 9.828 10.72 22.406");
}

.dqkrvqbxo {
  cx: 24.024px;
  cy: 40.771px;
  r: 2.729px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.o9gs1xc6d {
  cx: 33.408px;
  cy: 29.231px;
  r: 2.729px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.r4iwwdbat {
  cx: 14.94px;
  cy: 29.388px;
  r: 2.729px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.utk52pwoc {
  cx: 24.024px;
  cy: 17.512px;
  r: 2.729px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="r4iwwdbat"/><circle class="o9gs1xc6d"/><circle class="utk52pwoc"/><circle class="dqkrvqbxo"/><path class="a4k1u4b1n"/>`,
		"fallback": "arcticons:unlimited-energy",
	});
}

export default Component;
