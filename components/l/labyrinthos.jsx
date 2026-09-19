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
		"content": `<style>.i-5y-cw1c {
  cx: 25.967px;
  cy: 15.701px;
  r: 3.716px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qy4hb7-ed {
  cx: 22.033px;
  cy: 15.701px;
  r: 3.716px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.un1m41bln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.676 12.053a2.806 2.806 0 0 0-5.352 0");
}

.wgxvclbrn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.595 43.5l-7.193-19.229a10.629 10.629 0 1 0-10.804 0L11.405 43.5ZM24 39.852v-21m0 17.259h1.938M24 33.195h2.858M24 39.027h2.858");
}
</style><path class="wgxvclbrn"/><circle class="qy4hb7-ed"/><circle class="i-5y-cw1c"/><path class="un1m41bln"/>`,
		"fallback": "arcticons:labyrinthos",
	});
}

export default Component;
