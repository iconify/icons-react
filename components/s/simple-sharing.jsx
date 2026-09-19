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
		"content": `<style>.a9q3fgb0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.754 32.98l4.217-4.217l-4.217-4.217");
}

.an1ihdqan {
  cx: 12.099px;
  cy: 28.763px;
  r: 1.007px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.b151vsb8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.438 23.281a11.339 11.339 0 0 0-22.665 0a6.206 6.206 0 0 0 .15 12.41h22.365a6.206 6.206 0 0 0 .15-12.41");
}

.ci694hbvt {
  cx: 5.507px;
  cy: 28.763px;
  r: 1.007px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k3nbzebuo {
  cx: 17.93px;
  cy: 28.763px;
  r: 1.007px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="b151vsb8l"/><path class="a9q3fgb0s"/><circle class="an1ihdqan"/><circle class="ci694hbvt"/><circle class="k3nbzebuo"/>`,
		"fallback": "arcticons:simple-sharing",
	});
}

export default Component;
