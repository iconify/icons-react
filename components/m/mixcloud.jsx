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
		"content": `<style>.j3s9ivbxi {
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

.r5jr146uq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.014 24h-7.768M9.5 28.115v-8.239l4.124 8.248l4.123-8.235v8.235M38.5 20.392l-8.247 7.216m8.247 0l-8.247-7.216");
}
</style><rect class="j3s9ivbxi"/><path class="r5jr146uq"/>`,
		"fallback": "arcticons:mixcloud",
	});
}

export default Component;
