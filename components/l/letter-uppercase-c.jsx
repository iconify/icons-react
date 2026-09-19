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
		"content": `<style>.gzxlochsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.3 26.635v.065A5.3 5.3 0 0 1 24 32h0a5.3 5.3 0 0 1-5.3-5.3v-5.4A5.3 5.3 0 0 1 24 16h0a5.3 5.3 0 0 1 5.3 5.3v.065");
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
</style><rect class="j3s9ivbxi"/><path class="gzxlochsv"/>`,
		"fallback": "arcticons:letter-uppercase-c",
	});
}

export default Component;
