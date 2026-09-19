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
		"content": `<style>.ib1hrab8q {
  cx: 13.059px;
  cy: 24px;
  r: 4.559px;
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

.rhsmgybyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 24v4.559m9.421 0l5.264-9.118l5.264 9.118m1.933-9.118v9.118H39.5");
}
</style><rect class="j3s9ivbxi"/><circle class="ib1hrab8q"/><path class="rhsmgybyv"/>`,
		"fallback": "arcticons:pal-closet",
	});
}

export default Component;
