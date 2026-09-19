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
		"content": `<style>.dsa6zjzhz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29l4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.r8t3p3bxd {
  width: 16.4px;
  height: 12.2px;
  x: 15.8px;
  y: 10.3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.toi9nfsrh {
  width: 16.4px;
  height: 12.2px;
  x: 15.8px;
  y: 25.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}
</style><rect class="r8t3p3bxd"/><rect class="toi9nfsrh"/><path class="dsa6zjzhz"/>`,
		"fallback": "arcticons:nds4droid",
	});
}

export default Component;
