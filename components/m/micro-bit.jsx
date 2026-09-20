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
		"content": `<style>.iw5aw-blo {
  cx: 14.5px;
  cy: 24px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jsm3a-v1b {
  cx: 33.5px;
  cy: 24px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yfp3w_ykd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.5 15h21a9 9 0 1 1 0 18h-21a9 9 0 1 1 0-18");
}
</style><path class="yfp3w_ykd"/><circle class="iw5aw-blo"/><circle class="jsm3a-v1b"/>`,
		"fallback": "arcticons:micro-bit",
	});
}

export default Component;
