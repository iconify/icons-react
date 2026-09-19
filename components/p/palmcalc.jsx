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
		"content": `<style>.edpjjebao {
  width: 7.82px;
  height: 7.82px;
  x: 12.27px;
  y: 12.43px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.f14tebb-g {
  width: 7.82px;
  height: 7.82px;
  x: 27.91px;
  y: 20.26px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.ibs15c7ht {
  width: 7.82px;
  height: 7.82px;
  x: 12.27px;
  y: 20.26px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.k70qq7fzq {
  width: 7.82px;
  height: 7.82px;
  x: 27.91px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.ovqp5wdma {
  width: 7.82px;
  height: 7.82px;
  x: 12.27px;
  y: 27.86px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.ru5x0kbta {
  width: 7.82px;
  height: 7.82px;
  x: 20.09px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.uosvglbpz {
  width: 7.82px;
  height: 7.82px;
  x: 12.27px;
  y: 35.68px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.v5l15es0h {
  width: 7.82px;
  height: 7.82px;
  x: 12.27px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.xrcsnobvl {
  width: 7.82px;
  height: 7.82px;
  x: 20.09px;
  y: 20.26px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.y4hnre84l {
  width: 7.82px;
  height: 7.82px;
  x: 27.91px;
  y: 12.43px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}
</style><rect class="v5l15es0h"/><rect class="ru5x0kbta"/><rect class="k70qq7fzq"/><rect class="ibs15c7ht"/><rect class="xrcsnobvl"/><rect class="f14tebb-g"/><rect class="edpjjebao"/><rect class="uosvglbpz"/><rect class="ovqp5wdma"/><rect class="y4hnre84l"/>`,
		"fallback": "arcticons:palmcalc",
	});
}

export default Component;
