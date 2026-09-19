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
		"content": `<style>.agufcgbrx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.711 23.01a7.329 7.329 0 0 1 14.59.127");
}

.kpijtubqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.291 41.805A21.497 21.497 0 1 1 42.98 33.87");
}

.l8n9g-bng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.182 25.73v17.59m1.662-17.59v17.59m4.886-17.59v17.59m5.178-17.59v17.59m1.954-17.59v17.59m3.908-17.59v17.59m1.955-17.59v17.59m3.909-17.59v17.59M26.345 25.73v17.59");
}

.opc4ycc_y {
  width: 30.291px;
  height: 22.474px;
  x: 12.557px;
  y: 23.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.954px;
}

.xgkhy-o2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.642 23.124a3.42 3.42 0 0 1 6.715 0");
}
</style><path class="kpijtubqp"/><path class="agufcgbrx"/><path class="xgkhy-o2m"/><rect class="opc4ycc_y"/><path class="l8n9g-bng"/>`,
		"fallback": "arcticons:picardbarcodescanner",
	});
}

export default Component;
