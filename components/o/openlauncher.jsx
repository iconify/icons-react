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
		"content": `<style>.f8rzhmbeo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29a4 4 0 0 1 4 4h0a4 4 0 0 1-4 4h-25");
}

.p4od-tbho {
  width: 37px;
  height: 8px;
  x: 5.5px;
  y: 34.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
}

.ujfkhtbqn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 38.5v-29a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v25");
}
</style><rect class="p4od-tbho"/><path class="f8rzhmbeo"/><path class="ujfkhtbqn"/>`,
		"fallback": "arcticons:openlauncher",
	});
}

export default Component;
