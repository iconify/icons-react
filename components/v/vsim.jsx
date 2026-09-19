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
		"content": `<style>.hc--w8bal {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.553 7.419h-1.415a1.503 1.503 0 0 0-1.504 1.503v33.075a1.503 1.503 0 0 0 1.504 1.503h24.806a1.503 1.503 0 0 0 1.503-1.503V40.58");
}

.if32lpbqs {
  width: 18.041px;
  height: 13.53px;
  x: 16.439px;
  y: 23.668px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.127px;
}

.itpirjbin {
  width: 7.517px;
  height: 3.007px;
  x: 21.701px;
  y: 28.93px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.752px;
}

.yzwp7wb7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.197 24.044v12.779m10.524-12.779v12.779M19.822 28.93h-3.007m17.289 0h-3.007m3.007 3.007h-3.007m-11.275 0h-3.007m6.389-7.893v4.51m0 3.759v4.51m4.51-12.779v4.51m0 3.759v4.51M29.729 4.5H13.056a1.503 1.503 0 0 0-1.503 1.503v33.075a1.503 1.503 0 0 0 1.503 1.503h24.806a1.503 1.503 0 0 0 1.504-1.503V14.832Z");
}
</style><rect class="if32lpbqs"/><rect class="itpirjbin"/><path class="yzwp7wb7y"/><path class="hc--w8bal"/>`,
		"fallback": "arcticons:vsim",
	});
}

export default Component;
