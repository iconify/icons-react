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
		"content": `<style>.c5iaf0b_d {
  cx: 24px;
  cy: 22.3px;
  r: 3.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jv2p7shrt {
  cx: 34px;
  cy: 22.3px;
  r: 3.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v-o2h6b4h {
  cx: 14px;
  cy: 22.3px;
  r: 3.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vkhokdbbo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.5 9.3h-33a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h1.64v7.4l8.26-7.4h23.1a3 3 0 0 0 3-3v-20a3 3 0 0 0-3-3");
}
</style><path class="vkhokdbbo"/><circle class="c5iaf0b_d"/><circle class="v-o2h6b4h"/><circle class="jv2p7shrt"/>`,
		"fallback": "arcticons:messages",
	});
}

export default Component;
