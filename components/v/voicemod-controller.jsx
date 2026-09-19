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

.lrx0dnb_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.54 17.638l9.116 11.22V17.286m4.027 9.467v-9.501l11.089 11.473l-1.666-11.497l7.626 8.298");
}
</style><rect class="j3s9ivbxi"/><path class="lrx0dnb_p"/>`,
		"fallback": "arcticons:voicemod-controller",
	});
}

export default Component;
