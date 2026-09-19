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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.juxor0bjw {
  cx: 21.5px;
  cy: 29.25px;
  r: 3.5px;
}

.m9560kbyx {
  d: path("M25 29.25v-14m0 0h5v4h-5z");
}

.qtgsqktdi {
  cx: 24px;
  cy: 24px;
  r: 14.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="qtgsqktdi"/><g class="y9tr6bcfx"><circle class="juxor0bjw"/><path class="m9560kbyx"/></g>`,
		"fallback": "arcticons:musicplayer",
	});
}

export default Component;
