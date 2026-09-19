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
		"content": `<style>.v1ezxsa0j {
  width: 8px;
  height: 8px;
  x: 10px;
  y: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.5px;
  ry: 2.5px;
}

.xim15w3gg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 24.5v9c0 2.216 1.784 4 4 4h31c2.216 0 4-1.784 4-4v-19c0-2.216-1.784-4-4-4h-31c-2.216 0-4 1.784-4 4s1.784 4 4 4h35");
}
</style><path class="xim15w3gg"/><rect class="v1ezxsa0j"/>`,
		"fallback": "arcticons:sell-pay",
	});
}

export default Component;
