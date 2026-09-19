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

.po3q85_mn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13 13h7.333v7.333H13zm14.667 0H35v7.333h-7.333zm0 11v-3.667h-7.334V24h-3.666v11h3.666v-3.667h7.334V35h3.666V24z");
}
</style><rect class="j3s9ivbxi"/><path class="po3q85_mn"/>`,
		"fallback": "arcticons:minecraft-alt-1",
	});
}

export default Component;
