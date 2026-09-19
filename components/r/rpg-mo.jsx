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
		"content": `<style>.a5ggqdbpu {
  d: path("m24.274 30.48l1.582-2.8l2.372.913v4.31");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.p83yr6v1q {
  d: path("m39.22 5.556l-28.209 18.9L41.065 39.24l1.36-.602");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="p83yr6v1q"/><path class="a5ggqdbpu"/></g><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:rpg-mo",
	});
}

export default Component;
