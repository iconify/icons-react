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
		"content": `<style>.edi79mb8h {
  cx: 24px;
  cy: 24px;
  r: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fcubrmb1k {
  cx: 24px;
  cy: 7px;
  r: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i-x0qobct {
  cx: 24px;
  cy: 41px;
  r: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.koyxlmbei {
  cx: 9.278px;
  cy: 32.5px;
  r: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vp125j8vw {
  cx: 38.722px;
  cy: 15.5px;
  r: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w_5rkcc8u {
  cx: 9.278px;
  cy: 15.5px;
  r: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x9eiz2b2k {
  cx: 38.722px;
  cy: 32.5px;
  r: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="w_5rkcc8u"/><circle class="koyxlmbei"/><circle class="i-x0qobct"/><circle class="x9eiz2b2k"/><circle class="vp125j8vw"/><circle class="fcubrmb1k"/><circle class="edi79mb8h"/>`,
		"fallback": "arcticons:social-gamebox",
	});
}

export default Component;
