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

.qhqoz8b3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.331 6.669L11.95 36.05a3.99 3.99 0 0 0 0 5.657l.793.793m28.587-1.17L24 24");
}
</style><rect class="j3s9ivbxi"/><path class="qhqoz8b3w"/>`,
		"fallback": "arcticons:pjsc-rostelecom",
	});
}

export default Component;
