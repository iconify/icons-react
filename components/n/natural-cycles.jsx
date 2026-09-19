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

.ofg1wbcsd {
  cx: 35.524px;
  cy: 17.842px;
  r: 3.341px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sz673_bsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.574 29.5V17.842L20.298 29.5V17.842M30.62 25.59v.048a3.86 3.86 0 0 1-3.863 3.862h0a3.86 3.86 0 0 1-3.862-3.862v-3.934a3.86 3.86 0 0 1 3.862-3.862h0a3.86 3.86 0 0 1 3.862 3.862v.047");
}
</style><rect class="j3s9ivbxi"/><path class="sz673_bsj"/><circle class="ofg1wbcsd"/>`,
		"fallback": "arcticons:natural-cycles",
	});
}

export default Component;
