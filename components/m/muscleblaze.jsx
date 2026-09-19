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
		"content": `<style>.b4fo6cg9w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.5 30.485V17.501l6.499 12.998l6.5-12.979v12.979M33.25 24a3.25 3.25 0 0 1 0 6.5h-5.362v-13h5.362a3.25 3.25 0 0 1 0 6.5m0 0h-5.362");
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
</style><rect class="j3s9ivbxi"/><path class="b4fo6cg9w"/>`,
		"fallback": "arcticons:muscleblaze",
	});
}

export default Component;
