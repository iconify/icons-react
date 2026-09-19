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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.esbf5n4gf {
  cx: 16.5px;
  cy: 15.5px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.haxy3sjul {
  cx: 31.5px;
  cy: 15.5px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.s513pwbdr {
  cx: 24px;
  cy: 28.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 12px;
  ry: 7px;
}

.slq-pccxe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.783 24.871v7.258m8.434-7.258v7.258");
}
</style><circle class="cpk0fnbgt"/><ellipse class="s513pwbdr"/><path class="slq-pccxe"/><circle class="esbf5n4gf"/><circle class="haxy3sjul"/>`,
		"fallback": "arcticons:pokke-money",
	});
}

export default Component;
