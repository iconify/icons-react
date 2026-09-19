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

.nmgve7byu {
  width: 5.089px;
  height: 5.089px;
  x: 21.456px;
  y: 13.239px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.osdphfsoo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.456 15.783H5.5m21.044 0H42.5");
}
</style><rect class="j3s9ivbxi"/><rect class="nmgve7byu"/><path class="osdphfsoo"/>`,
		"fallback": "arcticons:minecraft-toolbox",
	});
}

export default Component;
