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
		"content": `<style>.akw8d0bcw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.679 24h2.538");
}

.gkybav68j {
  cx: 34.554px;
  cy: 24px;
  r: 8.945px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.op__zqaut {
  width: 3.31px;
  height: 17.84px;
  x: 4.5px;
  y: 15.08px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.655px;
}

.z90tl7brf {
  width: 3.31px;
  height: 9.606px;
  x: 11.396px;
  y: 19.197px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.655px;
}
</style><circle class="gkybav68j"/><path class="akw8d0bcw"/><rect class="z90tl7brf"/><rect class="op__zqaut"/>`,
		"fallback": "arcticons:lineage-recorder",
	});
}

export default Component;
