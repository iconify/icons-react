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
		"content": `<style>.a0_okdmqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.052 37.425l-5.809-3.354v6.707z");
}

.aymv7nb9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.081 22.632c-.317-7.247 7.998-3.955 11.608-11.174a32.3 32.3 0 0 1-7.979 3.666c-4.261 1.448-6.534 2.206-3.629 7.508");
}

.po7h76nxu {
  cx: 20.179px;
  cy: 36.929px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7.753px;
  ry: 6.02px;
}

.yr7388j4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.53 17.588c.334-6.205 9.654-.543 16.584-13.088c-8.69 7.738-20.789 5.428-16.583 13.088m2.55 5.044l5.628 10.118M18.53 17.588l1.754 3.394");
}
</style><path class="aymv7nb9b"/><path class="yr7388j4z"/><ellipse transform="rotate(-32.62 20.18 36.93)" class="po7h76nxu"/><path class="a0_okdmqd"/>`,
		"fallback": "arcticons:lamusica",
	});
}

export default Component;
