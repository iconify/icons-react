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

.mu-vwub-b {
  cx: 24px;
  cy: 24px;
  r: 4.797px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qtgsqktdi {
  cx: 24px;
  cy: 24px;
  r: 14.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.r7szhf-4n {
  cx: 22.393px;
  cy: 22.205px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.54px;
  ry: 0.714px;
}

.t7_fuqbxw {
  cx: 24px;
  cy: 24px;
  r: 10.22px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="qtgsqktdi"/><circle class="t7_fuqbxw"/><circle class="mu-vwub-b"/><ellipse transform="rotate(-45 22.393 22.205)" class="r7szhf-4n"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:radioo",
	});
}

export default Component;
