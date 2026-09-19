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
		"content": `<style>.g5nbv9bzn {
  cx: 23.992px;
  cy: 24.025px;
  r: 8.746px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.onp5v0_ma {
  cx: 23.924px;
  cy: 24.094px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ydtsufwbo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.372 21.933v3.312a1.618 1.618 0 1 0 3.233 0v-3.312");
}
</style><circle class="onp5v0_ma"/><circle class="g5nbv9bzn"/><path class="ydtsufwbo"/>`,
		"fallback": "arcticons:unifi-network",
	});
}

export default Component;
