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
		"content": `<style>.bd0qghp9u {
  cx: 9.379px;
  cy: 24px;
  r: 3.879px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.emrrpzb9c {
  width: 25.064px;
  height: 7.758px;
  x: 17.436px;
  y: 20.121px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.79px;
  ry: 1.79px;
}

.ex8nlibyu {
  width: 25.064px;
  height: 7.758px;
  x: 17.436px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.79px;
  ry: 1.79px;
}

.g2btydbyh {
  width: 25.064px;
  height: 7.758px;
  x: 17.436px;
  y: 34.742px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.79px;
  ry: 1.79px;
}

.rs1tg12cp {
  cx: 9.379px;
  cy: 9.379px;
  r: 3.879px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zc-6lkbpp {
  cx: 9.379px;
  cy: 38.621px;
  r: 3.879px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="rs1tg12cp"/><circle class="zc-6lkbpp"/><circle class="bd0qghp9u"/><rect class="ex8nlibyu"/><rect class="g2btydbyh"/><rect class="emrrpzb9c"/>`,
		"fallback": "arcticons:services",
	});
}

export default Component;
