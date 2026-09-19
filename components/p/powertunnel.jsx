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
		"content": `<style>.tqirmabnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 17.045a22.19 22.19 0 0 1 23.588-3.51a23.24 23.24 0 0 1 13.585 20.099");
}

.xfbg5ib3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.36 36.393L19.553 22.2l8.69 8.691L43.5 14.37");
}
</style><path class="xfbg5ib3x"/><path class="tqirmabnk"/>`,
		"fallback": "arcticons:powertunnel",
	});
}

export default Component;
