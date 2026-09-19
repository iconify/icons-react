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
		"content": `<style>.dg096uvwi {
  cx: 33.75px;
  cy: 29.701px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 9.75px;
  ry: 6.548px;
}

.ovlc1cbnd {
  cx: 14.25px;
  cy: 29.686px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7.06px;
  ry: 4.035px;
}

.pf72jxbij {
  cx: 24px;
  cy: 18.299px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 9.75px;
  ry: 6.548px;
}

.tpbfp3bon {
  cx: 24px;
  cy: 18.352px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7.06px;
  ry: 4.035px;
}

.u7m-vfbib {
  cx: 14.25px;
  cy: 29.633px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 9.75px;
  ry: 6.548px;
}

.w8ldgdbrv {
  cx: 33.75px;
  cy: 29.754px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7.06px;
  ry: 4.035px;
}
</style><ellipse class="ovlc1cbnd"/><ellipse class="u7m-vfbib"/><ellipse class="tpbfp3bon"/><ellipse class="pf72jxbij"/><ellipse class="w8ldgdbrv"/><ellipse class="dg096uvwi"/>`,
		"fallback": "arcticons:state-farm",
	});
}

export default Component;
