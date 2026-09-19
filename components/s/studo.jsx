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
		"content": `<style>.dogxzo4ur {
  cx: 24px;
  cy: 24px;
  r: 4.346px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lxndv_bxt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.927 20.927l-8.451-8.451");
}

.waz0iftqk {
  width: 32.594px;
  height: 32.594px;
  x: 7.703px;
  y: 7.703px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6px;
}
</style><rect transform="rotate(45 24 24)" class="waz0iftqk"/><circle class="dogxzo4ur"/><path class="lxndv_bxt"/>`,
		"fallback": "arcticons:studo",
	});
}

export default Component;
