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
		"content": `<style>.oy5o4pmmm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.97 26.14h23.08m-30.1 8.68h23.08");
}

.q35kb7b7x {
  cx: 23.98px;
  cy: 9.5px;
  r: 5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rgb0vo3mk {
  width: 30.1px;
  height: 26.04px;
  x: 8.95px;
  y: 17.46px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5px;
}
</style><rect class="rgb0vo3mk"/><path class="oy5o4pmmm"/><circle class="q35kb7b7x"/>`,
		"fallback": "arcticons:sparkasse",
	});
}

export default Component;
