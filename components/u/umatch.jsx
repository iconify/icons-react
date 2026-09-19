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

.lxonu0cjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.005 13.5v15.76a5.24 5.24 0 0 1-5.24 5.24h-5.53a5.24 5.24 0 0 1-5.24-5.24V13.5m-2.038 0h4.076m11.934 0h4.076");
}
</style><path class="lxonu0cjd"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:umatch",
	});
}

export default Component;
