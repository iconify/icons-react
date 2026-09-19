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
		"content": `<style>.a7r91fb1l {
  cx: 37.176px;
  cy: 35.75px;
  r: 3.162px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.as5l2nbez {
  cx: 37.176px;
  cy: 29.425px;
  r: 3.162px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dmwjigbzf {
  width: 39px;
  height: 27.405px;
  x: 4.5px;
  y: 14.668px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.108px;
}

.gtqn7tb5b {
  cx: 30.851px;
  cy: 29.425px;
  r: 3.162px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.keefd77nt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.233 14.667a11.588 11.588 0 0 0-22.466 0");
}

.uongb-jms {
  cx: 30.851px;
  cy: 35.75px;
  r: 3.162px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="dmwjigbzf"/><path class="keefd77nt"/><circle class="a7r91fb1l"/><circle class="as5l2nbez"/><circle class="uongb-jms"/><circle class="gtqn7tb5b"/>`,
		"fallback": "arcticons:opensstpclient",
	});
}

export default Component;
