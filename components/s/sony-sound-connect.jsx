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
		"content": `<style>.t0j6e5bwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.627 17.825L16.124 5.5v24.649z");
}

.wjas4sb_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.854 34.309l8.27-4.16");
}

.wnwmf9bpx {
  cx: 18.862px;
  cy: 31.01px;
  r: 11.49px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="t0j6e5bwy"/><circle class="wnwmf9bpx"/><path class="wjas4sb_q"/>`,
		"fallback": "arcticons:sony-sound-connect",
	});
}

export default Component;
