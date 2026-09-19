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
		"content": `<style>.bcnc-pbxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.095 18.042v11.916m0-4.151l6.405-7.725m0 11.876L33.594 24m-15.222-5.958v11.916M9.5 18.042v11.916h5.958m5.829 0V18.042l7.894 11.916V18.042");
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
</style><path class="bcnc-pbxq"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:moondrop-link",
	});
}

export default Component;
