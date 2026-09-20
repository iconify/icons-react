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
		"content": `<style>.fpr8qvbek {
  d: path("M28 22.6V28a4 4 0 0 1-4 4a4 4 0 0 1-2.828-1.171");
}

.j3s9ivbxi {
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

.r4cdy9b6f {
  d: path("M28 16v6.6a4 4 0 0 1-8 0V16");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="j3s9ivbxi"/><g class="y9tr6bcfx"><path class="fpr8qvbek"/><path class="r4cdy9b6f"/></g>`,
		"fallback": "arcticons:letter-lowercase-square-y",
	});
}

export default Component;
