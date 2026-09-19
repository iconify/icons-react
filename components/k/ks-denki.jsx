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
		"content": `<style>.eattbgk7w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.5 30.5l3.483-13M15.242 24l9.258-6.5m-7.621 5.351c1.762 3.051 6.197 7.65 13.062 7.65c5.227 0 6.614-3.195.681-4.714c-7.716-1.975-3.59-7.195 3.878-3.813m-2-4.474l2-2");
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
</style><rect class="j3s9ivbxi"/><path class="eattbgk7w"/>`,
		"fallback": "arcticons:ks-denki",
	});
}

export default Component;
