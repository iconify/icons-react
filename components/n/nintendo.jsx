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
		"content": `<style>.aj9nz6roq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.642 30.499V17.501L29.358 30.5v-13");
}

.f7r02vbbo {
  width: 39px;
  height: 27px;
  x: 4.5px;
  y: 10.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 13.5px;
  ry: 13.5px;
}
</style><rect class="f7r02vbbo"/><path class="aj9nz6roq"/>`,
		"fallback": "arcticons:nintendo",
	});
}

export default Component;
