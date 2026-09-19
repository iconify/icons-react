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
		"content": `<style>.q_o01m-wm {
  cx: 7.859px;
  cy: 24px;
  r: 4.359px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q6ee5mx8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.491 24H12.218");
}

.qyu5dvbal {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 28.359V24");
}

.r721cbb_u {
  width: 31.541px;
  height: 31.541px;
  x: 8.23px;
  y: 8.23px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.352px;
}
</style><rect transform="rotate(45 24 24)" class="r721cbb_u"/><path class="qyu5dvbal"/><circle class="q_o01m-wm"/><path class="q6ee5mx8e"/>`,
		"fallback": "arcticons:passbolt",
	});
}

export default Component;
