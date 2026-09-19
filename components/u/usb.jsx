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
		"content": `<style>.g5v-l6bxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.125 36.5v-26m-3 0l3-6l3 6zm3 18.407l8.5-4.907v-3m-8.5 11.907L15.625 28v-3m14.25-9.501h5.5v5.5h-5.5z");
}

.h-zk0mb_w {
  cx: 24.125px;
  cy: 40px;
  r: 3.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.kfpgbbbhw {
  cx: 15.625px;
  cy: 21.999px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="g5v-l6bxf"/><circle class="h-zk0mb_w"/><circle class="kfpgbbbhw"/>`,
		"fallback": "arcticons:usb",
	});
}

export default Component;
