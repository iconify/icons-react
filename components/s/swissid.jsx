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
		"content": `<style>.g-yq4glkk {
  cx: 24px;
  cy: 37.806px;
  r: 4.694px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.n4fr9mamk {
  cx: 24px;
  cy: 24px;
  r: 4.694px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.onvaf8bso {
  cx: 24px;
  cy: 10.194px;
  r: 4.694px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xdpfam7oq {
  cx: 37.806px;
  cy: 24px;
  r: 4.694px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zk64dqbjd {
  cx: 10.194px;
  cy: 24px;
  r: 4.694px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="n4fr9mamk"/><circle class="onvaf8bso"/><circle class="g-yq4glkk"/><circle class="xdpfam7oq"/><circle class="zk64dqbjd"/>`,
		"fallback": "arcticons:swissid",
	});
}

export default Component;
