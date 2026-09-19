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
		"content": `<style>.b_ls79cms {
  width: 13.123px;
  height: 14.966px;
  x: 17.439px;
  y: 7.067px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.561px;
}

.m8z6wuzce {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.747 15.788v24.797a2.406 2.406 0 0 1-2.023 2.375h0a42.5 42.5 0 0 1-13.512 0h0a2.406 2.406 0 0 1-2.024-2.375V15.788");
}

.sjoux7vsx {
  width: 17.624px;
  height: 20.1px;
  x: 15.188px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 8.812px;
}
</style><rect class="b_ls79cms"/><rect class="sjoux7vsx"/><path class="m8z6wuzce"/>`,
		"fallback": "arcticons:unifi-protect",
	});
}

export default Component;
