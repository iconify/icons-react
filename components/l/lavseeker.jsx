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
		"content": `<style>.jfu55pbog {
  cx: 34.992px;
  cy: 12.279px;
  r: 5.83px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.l1-_y7byj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 41.566H27.483l7.509-21.155zm-37-21.155h15.017l-7.509 21.155z");
}

.ym24w5bim {
  cx: 13.008px;
  cy: 12.264px;
  r: 5.83px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ym24w5bim"/><circle class="jfu55pbog"/><path class="l1-_y7byj"/>`,
		"fallback": "arcticons:lavseeker",
	});
}

export default Component;
