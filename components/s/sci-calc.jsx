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

.xzhh21bvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 18.118h37m-37 12.334h37m-29.078-6.167h6.674m-6.674 10.431h6.674m-6.674 3.301h6.674m-3.337-22.542V8.801m-3.337 3.337h6.674");
}
</style><rect class="j3s9ivbxi"/><path class="xzhh21bvp"/>`,
		"fallback": "arcticons:sci-calc",
	});
}

export default Component;
