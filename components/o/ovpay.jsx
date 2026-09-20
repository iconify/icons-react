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
		"content": `<style>.a-r2bj4be {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.013 25.448v4.146a2.513 2.513 0 1 1-5.026 0v-4.146m-2.554 4.146a2.513 2.513 0 1 1-5.026 0v-1.633a2.513 2.513 0 1 1 5.026 0m0 4.146v-6.659m-12.446 4.146a2.513 2.513 0 1 0 5.026 0v-1.633a2.513 2.513 0 1 0-5.026 0m0-2.513V35.5m17.664-23l-3.33 10.052l-3.33-10.052");
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

.pq8jjwbrl {
  width: 6.66px;
  height: 10.052px;
  x: 16.349px;
  y: 12.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.33px;
  ry: 3.33px;
}

.rwhb-8w_g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.013 29.594v3.393A2.513 2.513 0 0 1 31.5 35.5a2.5 2.5 0 0 1-1.777-.736");
}
</style><rect class="j3s9ivbxi"/><path class="rwhb-8w_g"/><path class="a-r2bj4be"/><rect class="pq8jjwbrl"/>`,
		"fallback": "arcticons:ovpay",
	});
}

export default Component;
