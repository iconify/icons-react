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
		"content": `<style>.nrcmzcb9s {
  cx: 43.749px;
  cy: 24px;
  r: 1.751px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vpvm13bbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 24l19.93-8.052h0a21.494 21.494 0 1 0-.144 16.45Z");
}

.ylmcyr_jq {
  cx: 37.247px;
  cy: 24px;
  r: 1.751px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="vpvm13bbr"/><circle class="ylmcyr_jq"/><circle class="nrcmzcb9s"/>`,
		"fallback": "arcticons:pacman",
	});
}

export default Component;
