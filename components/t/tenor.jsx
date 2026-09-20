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

.ozuud_mbl {
  cx: 25.146px;
  cy: 19.218px;
  r: 3.881px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q35ido4fh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.982 19.218l-2.822-1.63v3.259z");
}

.tvth5ibpt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.146 25.245v7.418m6.299-7.055h4.586m-4.586 7.055v-14.11H38.5m-19.652 4.674a4.674 4.674 0 1 0-9.348 0v4.762a4.674 4.674 0 1 0 9.348 0h-4.674");
}
</style><rect class="j3s9ivbxi"/><path class="tvth5ibpt"/><circle class="ozuud_mbl"/><path class="q35ido4fh"/>`,
		"fallback": "arcticons:tenor",
	});
}

export default Component;
