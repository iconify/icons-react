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
		"content": `<style>.ca51fsglw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 6.345h6.125l7.398 25.253h19.22L43.5 13.496H18.545");
}

.hja35gvsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.12 20.971l4.118 4.117l7.743-7.743");
}

.w1khqccew {
  cx: 19.886px;
  cy: 38.228px;
  r: 3.427px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wx79wgbnr {
  cx: 34.241px;
  cy: 38.228px;
  r: 3.427px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="ca51fsglw"/><path class="hja35gvsv"/><circle class="w1khqccew"/><circle class="wx79wgbnr"/>`,
		"fallback": "arcticons:softlist",
	});
}

export default Component;
