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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.njvb1ibbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 33.137v-9.534h3.121a3.202 3.202 0 0 1 0 6.404H12.5m16.684 3.13v-9.534h3.121a3.202 3.202 0 0 1 0 6.404h-3.121m3.121 0l3.121 3.127M21.617 28.37h4.766M24 25.987v4.766M12.5 20.028h23m-23 16.684h23M26.87 6.041l2.865 2.868l-2.867 2.867m-5.739 0L18.265 8.91l2.867-2.868m-2.867 2.867h11.47M24 6.041v5.736");
}

.ww6z_4c0i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.421 15.318h39.158");
}
</style><path class="njvb1ibbs"/><circle class="cpk0fnbgt"/><path class="ww6z_4c0i"/>`,
		"fallback": "arcticons:sbb-p-rail",
	});
}

export default Component;
