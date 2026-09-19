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
		"content": `<style>.j0090h-9h {
  cx: 28.868px;
  cy: 13.871px;
  r: 0.75px;
  fill: currentColor;
}

.j3s9ivbxi {
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

.lpoewzquv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.382 16.478v5.757");
}

.pgul6qbwh {
  width: 5.757px;
  height: 8.69px;
  x: 14.226px;
  y: 26.254px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.878px;
  ry: 2.878px;
}

.shgd4ub-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.878 34.944v-3.585c0-1.2-.972-2.172-2.172-2.172h0c-1.2 0-2.172.972-2.172 2.172m0 3.585v-5.757m10.956 4.66a2.17 2.17 0 0 1-1.888 1.096h0c-1.2 0-2.173-.972-2.173-2.172V31.36c0-1.2.973-2.172 2.173-2.172h0c1.2 0 2.172.972 2.172 2.172v.706H29.43");
}

.v8l_r24pv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.5 20.063c0 1.2-.973 2.172-2.172 2.172h0c-1.2 0-2.173-.973-2.173-2.172V18.65c0-1.2.973-2.172 2.173-2.172h0c1.2 0 2.172.973 2.172 2.172m0 3.585v-5.757m-18.655 5.757V18.65c0-1.2-.973-2.172-2.173-2.172h0c-1.2 0-2.172.973-2.172 2.172m0 3.585v-5.757m13.764 5.757V18.65c0-1.2-.973-2.172-2.172-2.172h0c-1.2 0-2.173.973-2.173 2.172m0 3.585v-5.757m6.949 0v7.3c0 .77-.609 1.39-1.369 1.39c-.38 0-.728-.152-.978-.413");
}

.xw-ge7htw {
  cx: 19.382px;
  cy: 13.817px;
  r: 0.696px;
  fill: currentColor;
}
</style><rect class="j3s9ivbxi"/><path class="shgd4ub-w"/><rect class="pgul6qbwh"/><circle class="xw-ge7htw"/><path class="lpoewzquv"/><circle class="j0090h-9h"/><path class="v8l_r24pv"/>`,
		"fallback": "arcticons:ninjaone-dashboard",
	});
}

export default Component;
