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

.xmmew6bft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.7 24a4 4 0 0 0 0 8h2.6a4 4 0 0 0 0-8m0 0a4 4 0 0 0 0-8h-2.6a4 4 0 0 0 0 8m0 0h2.6");
}
</style><rect class="j3s9ivbxi"/><path class="xmmew6bft"/>`,
		"fallback": "arcticons:number-8",
	});
}

export default Component;
