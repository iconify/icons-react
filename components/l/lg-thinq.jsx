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
		"content": `<style>.fxwccmtmv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.804 33.41V17.555L24 6.982l12.464 8.67");
}

.gvqgig9xz {
  cx: 39.196px;
  cy: 17.554px;
  r: 3.304px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.l08r_wb8j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.196 20.857v18.5H19.375V24.161h10.571v9.25");
}

.zl0gqyd6k {
  cx: 8.804px;
  cy: 36.714px;
  r: 3.304px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="zl0gqyd6k"/><circle class="gvqgig9xz"/><path class="fxwccmtmv"/><path class="l08r_wb8j"/>`,
		"fallback": "arcticons:lg-thinq",
	});
}

export default Component;
