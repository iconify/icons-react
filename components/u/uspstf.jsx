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
		"content": `<style>.alds1zcvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.72 28.55v-9.1h2.978c1.684 0 3.049 1.369 3.049 3.056s-1.365 3.056-3.05 3.056H13.72m8.178-6.111h6.027m-3.014 9.098v-9.098M31.17 24h2.957m-2.957 4.549v-9.098h4.549");
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
</style><rect class="j3s9ivbxi"/><path class="alds1zcvp"/>`,
		"fallback": "arcticons:uspstf",
	});
}

export default Component;
