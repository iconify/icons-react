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
		"content": `<style>.bazrd6r_s {
  cx: 33.83px;
  cy: 31.348px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
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

.k9qilfq4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 32.867c0 5.505-3.933 7.26-6.881 7.254l-23.313-.125C9.202 39.89 5.5 38.292 5.5 32.867m28.042 7.243v2.39m-9.579-2.442V42.5m-9.481-2.492V42.5m14.789-12.994a9 9 0 1 1 2.732-2.624");
}
</style><rect class="j3s9ivbxi"/><path class="k9qilfq4d"/><circle class="bazrd6r_s"/>`,
		"fallback": "arcticons:quizizz",
	});
}

export default Component;
