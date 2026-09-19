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
		"content": `<style>.k2p_ujbyr {
  width: 17.249px;
  height: 33.211px;
  x: 15.375px;
  y: 7.395px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.065px;
}

.p48m-sb-m {
  width: 7.195px;
  height: 28.398px;
  x: 4.5px;
  y: 9.8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.065px;
}

.rn5b5cb4i {
  width: 7.195px;
  height: 28.398px;
  x: 36.305px;
  y: 9.8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.065px;
}
</style><rect class="k2p_ujbyr"/><rect class="p48m-sb-m"/><rect class="rn5b5cb4i"/>`,
		"fallback": "arcticons:quickswitch",
	});
}

export default Component;
