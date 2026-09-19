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
		"content": `<style>.dzxhv4b5m {
  width: 6.192px;
  height: 6.192px;
  x: 26.785px;
  y: 20.466px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.235px;
  ry: 1.235px;
}

.o-kp01bcd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.202 18.102h-7.19zm0 0h-7.19l-3.68 6.375h14.552zM18.42 5.5l-7.274 12.602h14.552zm.07 19.065v2.769");
}

.ry8tv5mtb {
  width: 25.999px;
  height: 10.61px;
  x: 11px;
  y: 27.346px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.847px;
  ry: 1.847px;
}

.yksub-ull {
  width: 15.951px;
  height: 4.544px;
  x: 15.904px;
  y: 37.956px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.437px;
  ry: 1.437px;
}
</style><rect class="ry8tv5mtb"/><rect class="yksub-ull"/><rect class="dzxhv4b5m"/><path class="o-kp01bcd"/>`,
		"fallback": "arcticons:square-on-top",
	});
}

export default Component;
