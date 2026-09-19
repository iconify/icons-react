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
		"content": `<style>.c8kspnmgt {
  cx: 32.257px;
  cy: 28.524px;
  r: 4.825px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hq-1ul3-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.635 14.048L26.232 5");
}

.qz45jq4av {
  width: 36.424px;
  height: 28.952px;
  x: 5.788px;
  y: 14.048px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.825px;
}

.u5mjvhbkp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.133 28.524h11.905m-11.905-3.619h11.905m-11.905 7.238h11.905");
}
</style><rect class="qz45jq4av"/><path class="hq-1ul3-d"/><circle class="c8kspnmgt"/><path class="u5mjvhbkp"/>`,
		"fallback": "arcticons:lewdfi",
	});
}

export default Component;
