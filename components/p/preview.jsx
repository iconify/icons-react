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

.qlwuwxbkc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 30.2h37m-37-12.4h37M30.2 5.5v37m-12.4-37v37m10-23c-.4 0-.7.3-.7.7s.3.7.7.7s.7-.3.7-.7h0c0-.4-.3-.7-.7-.7M24 21.2c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8c1.5 0 2.8-1.2 2.8-2.8h0c0-1.5-1.3-2.8-2.8-2.8");
}
</style><path class="qlwuwxbkc"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:preview",
	});
}

export default Component;
