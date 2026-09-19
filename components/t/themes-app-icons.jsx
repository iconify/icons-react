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
		"content": `<style>.bd4ymsbye {
  width: 6.452px;
  height: 6.452px;
  x: 36.048px;
  y: 15.548px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}

.bt_yqrbkd {
  width: 16.5px;
  height: 16.5px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}

.d-qfemb6k {
  width: 6.452px;
  height: 6.452px;
  x: 26px;
  y: 15.548px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}

.jec9yzbnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.5 26h-33a2 2 0 0 0-2 2v12.5a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2V28a2 2 0 0 0-2-2");
}

.o0v9otb3b {
  width: 6.452px;
  height: 6.452px;
  x: 36.048px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}

.x3jdi7dwf {
  width: 6.452px;
  height: 6.452px;
  x: 26px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}
</style><path class="jec9yzbnr"/><rect class="bt_yqrbkd"/><rect class="d-qfemb6k"/><rect class="x3jdi7dwf"/><rect class="bd4ymsbye"/><rect class="o0v9otb3b"/>`,
		"fallback": "arcticons:themes-app-icons",
	});
}

export default Component;
