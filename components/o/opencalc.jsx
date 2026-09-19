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
		"content": `<style>.bf_1sfblq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.422 27.209v-5.417m2.723 2.71h-5.417m.787 11.066l3.83-3.83m.01 3.841l-3.83-3.83m17.751 3.817h-5.417m5.422-11.069h-5.417m5.417 7.315h-5.417");
}

.s-k1km8xs {
  width: 21.865px;
  height: 7.497px;
  x: 13.067px;
  y: 10.001px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.uhx3m_1tm {
  width: 31px;
  height: 39px;
  x: 8.5px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="uhx3m_1tm"/><path class="bf_1sfblq"/><rect class="s-k1km8xs"/>`,
		"fallback": "arcticons:opencalc",
	});
}

export default Component;
