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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.uedslfbwg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 16.536v-6.363h-5.905v11.835H24v6.363h5.905V16.536z");
}

.yuyx8b3ng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 26.398C11.605 29.58 24 40.827 24 40.827s14.096-9.261 18.5-13.665");
}
</style><path class="uedslfbwg"/><path class="yuyx8b3ng"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:sand-blast",
	});
}

export default Component;
