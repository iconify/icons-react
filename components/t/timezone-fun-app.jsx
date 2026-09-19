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

.qj2rgir9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.684 20.58h23.978c1.182 0 1.419 1.673.283 2l-11.132 3.213c-1.136.328-.899 2.002.283 2.002h11.588M16.41 20.579v7.215");
}
</style><rect class="j3s9ivbxi"/><path class="qj2rgir9e"/>`,
		"fallback": "arcticons:timezone-fun-app",
	});
}

export default Component;
